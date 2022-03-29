import React from 'react';
import Head from 'next/head';
import { withAdminLayout } from 'component/layout';
import { useRouter } from 'next/router';
import { Textbox } from 'component/form';
import { SubmitButton } from 'component/button';
import FormLayout from 'component/layout/FormLayout';
import { useFormik } from 'formik';
import { apiConfig } from 'utils/api';
import { useSnackbar } from 'component/snackbar';

const BlogsTypeForm = () => {
  const router = useRouter();
  const snackbar = useSnackbar();
  const { id } = router.query;
  const title = 'Articles';
  const backUrl = '/articles';

  const formik = useFormik({
    initialValues: {
      title: '',
      summary: '',
      category: '',
      language: '',
      pv_total: '',
      pv_day: '',
      pv_week: '',
      pv_month: '',
      published: '',
    },
    validate: values => {
      const errors = {};

      if (!values.title) {
        errors.title = 'Title is Required';
      }
      if (!values.category) {
        errors.category = 'Category is Required';
      }
      return errors;
    },
    onSubmit: async (values, { setErrors }) => {
      let url, method, actionUrl = 'articles';

      if (id == 'new') {
        method = 'post';
        url = actionUrl;
      } else {
        method = 'put';
        url = `${actionUrl}/${id}`;
      }

      let data = {};

      data.title = values.title;
      data.summary = values.summary;
      data.category = values.category;
      data.language = values.language;
      data.pv_total = values.pv_total;
      data.pv_day = values.pv_day;
      data.pv_week = values.pv_week;
      data.pv_month = values.pv_month;
      data.published = values.published;

      await apiConfig
        .request({
          method: method,
          url: url,
          data: data,
        })
        .then(response => {
          if (response.status === 200) {
            snackbar({
              message: response.data.message,
              severity: 'success',
            });
            router.push(backUrl);
          }
        })
        .catch(error => {
          console.log('articles', error);
          const { response } = error;

          snackbar({
            message: response?.data?.message,
            severity: 'error',
          });
          for (const [key, value] of Object.entries(values)) {
            if (response?.data?.errors[key]) {
              setErrors({ [key]: response.data.errors[key][0] });
            }
          }
        });
    }
  });

  const bindData = async (id) => {
    await apiConfig.get(`/articles/${id}`).then(response => {
      if (response.status === 200) {
        const { data } = response;
        // bind form data from server
        for (const [key] of Object.entries(formik.values)) {
          formik.setFieldValue([key], data[key]);
        }
      }
    }).catch((error) => {
      console.log('bindarticles', error);
    });
  };

  React.useEffect(() => {
    if (id && id !== 'new') {
      bindData(id);
    }
  }, [id]);

  return (
    <React.Fragment>
      <Head>
        <title>{title}</title>
      </Head>

      <FormLayout lg={8} title={title} goBack={backUrl}>
        <form noValidate onSubmit={formik.handleSubmit}>
          <Textbox
            fullWidth
            label="Title"
            name="title"
            value={formik.values.title}
            onChange={formik.handleChange}
            error={formik.touched.title && formik.errors.title}
            helperText={formik.touched.title && formik.errors.title}
          />
          <Textbox
            fullWidth
            label="Summary"
            name="summary"
            value={formik.values.summary}
            onChange={formik.handleChange}
            error={formik.touched.summary && formik.errors.summary}
            helperText={formik.touched.summary && formik.errors.summary}
          />
          <Textbox
            fullWidth
            label="Category"
            name="category"
            value={formik.values.category}
            onChange={formik.handleChange}
            error={formik.touched.category && formik.errors.category}
            helperText={formik.touched.category && formik.errors.category}
          />
          <Textbox
            fullWidth
            label="Language"
            name="language"
            value={formik.values.language}
            onChange={formik.handleChange}
            error={formik.touched.language && formik.errors.language}
            helperText={formik.touched.language && formik.errors.language}
          />
          <Textbox
            fullWidth
            label="Pv Total"
            name="pv_total"
            value={formik.values.pv_total}
            onChange={formik.handleChange}
            error={formik.touched.pv_total && formik.errors.pv_total}
            helperText={formik.touched.pv_total && formik.errors.pv_total}
          />
          <Textbox
            fullWidth
            label="Pv Day"
            name="pv_day"
            value={formik.values.pv_day}
            onChange={formik.handleChange}
            error={formik.touched.pv_day && formik.errors.pv_day}
            helperText={formik.touched.pv_day && formik.errors.pv_day}
          />
          <Textbox
            fullWidth
            label="Pv Week"
            name="pv_week"
            value={formik.values.pv_week}
            onChange={formik.handleChange}
            error={formik.touched.pv_week && formik.errors.pv_week}
            helperText={formik.touched.pv_week && formik.errors.pv_week}
          />
          <Textbox
            fullWidth
            label="Pv Month"
            name="pv_month"
            value={formik.values.pv_month}
            onChange={formik.handleChange}
            error={formik.touched.pv_month && formik.errors.pv_month}
            helperText={formik.touched.pv_month && formik.errors.pv_month}
          />
          <Textbox
            fullWidth
            label="Published"
            name="published"
            value={formik.values.published}
            onChange={formik.handleChange}
            error={formik.touched.published && formik.errors.published}
            helperText={formik.touched.published && formik.errors.published}
          />
          <SubmitButton
            loading={formik.isSubmitting}
            variant="contained"
            title={id === 'new' ? 'Save' : 'Update'}
          />
        </form>
      </FormLayout>
    </React.Fragment>
  );
};

export default withAdminLayout(BlogsTypeForm);
