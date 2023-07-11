import { useEffect, useRef, useState } from "react";

const TextEditor = () => {
  const editorRef = useRef<{
    CKEditor: typeof CKEditor;
    Editor: typeof Editor;
  }>();
  const [editorLoaded, setEditorLoaded] = useState(false);
  const { CKEditor, Editor } = editorRef.current || {};

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
          className="wrap-ckeditor mt-3"
          editor={Editor}
          // config={editorConfiguration}
        />
      ) : (
        "loading..."
      )}
    </div>
  );
};

export default TextEditor;
