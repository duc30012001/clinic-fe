import { useEffect, useRef, useState } from "react";

type Props = {
  height?: number;
  onChange?: (event: any) => void;
  onBlur?: (event: any) => void;
  name: string;
  value: any;
  htmlRef?: React.LegacyRef<HTMLTextAreaElement>;
};

const TextEditor = ({ height, onChange, value, name, htmlRef }: Props) => {
  const editorRef = useRef<{
    CKEditor: typeof CKEditor;
    Editor: typeof Editor;
  }>();
  const [editorLoaded, setEditorLoaded] = useState(false);
  const { CKEditor, Editor } = editorRef.current || {};

  const config = {
    height: height || 400,
    language: "vi",
    toolbar: [
      "textAlignment",
      "fontFamily",
      "fontColor",
      "fontSize",
      "undo",
      "redo",
      "bold",
      "italic",
      "numberedList",
      "bulletedList",
      "link",
    ],
  };

  function handleChange(event, editor) {
    const data = editor.getData();
    if (onChange) onChange(data);
  }

  useEffect(() => {
    editorRef.current = {
      CKEditor: require("@ckeditor/ckeditor5-react").CKEditor,
      Editor: require("ckeditor5-custom-build/build/ckeditor"),
    };
    setEditorLoaded(true);
  }, []);

  return (
    <div>
      {editorLoaded ? (
        <CKEditor
          name={name}
          className="wrap-ckeditor mt-3"
          editor={Editor}
          config={config}
          data={value}
          onChange={handleChange}
          id={name}
          ref={htmlRef}
        />
      ) : (
        "loading..."
      )}
    </div>
  );
};

export default TextEditor;
