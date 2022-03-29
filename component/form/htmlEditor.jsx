import { FormHelperText, InputLabel } from '@mui/material';
import { Editor } from '@tinymce/tinymce-react';
import { FormControl } from '.';

const TextBox = (props) => {
    const { name, label, value, fullWidth, helperText, disabled } = props
    return (
        <FormControl
            key={`key${name}`}
            error={helperText ? true : false}
            fullWidth={fullWidth}
        >
            <InputLabel>{label}</InputLabel>


            <Editor
                apiKey={process.env.NEXT_PUBLIC_HTML_EDITOR_KEY}
                disabled={disabled}
                value={value}
                init={{
                    height: 500,
                    menubar: false,
                    plugins: [
                        'advlist autolink lists link image charmap print preview anchor',
                        'searchreplace visualblocks code fullscreen',
                        'insertdatetime media table paste code help wordcount'
                    ],
                    toolbar:
                        'undo redo | formatselect | bold italic backcolor | \
             alignleft aligncenter alignright alignjustify | \
             bullist numlist outdent indent | removeformat | help'
                }}
                onEditorChange={e => props.onChange(e)}
            />

            {helperText && <FormHelperText>{helperText}</FormHelperText>}
        </FormControl>
    )
}

export default TextBox;