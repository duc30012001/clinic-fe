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
      "heading",
      "|",
      "bold",
      "italic",
      "underline",
      "strikethrough",
      "|",
      "fontSize",
      "fontColor",
      "fontBackgroundColor",
      "|",
      "alignment",
      "outdent",
      "indent",
      "bulletedList",
      "numberedList",
      "blockQuote",
      "|",
      "link",
      "insertTable",
      "insertImage",
      "|",
      "undo",
      "redo",
    ],
    heading: {
      options: [
        {
          model: "paragraph",
          view: "p",
          title: "Paragraph",
          class: "ck-heading_paragraph",
        },
        {
          model: "heading1",
          view: "h1",
          title: "Heading 1",
          class: "ck-heading_heading1",
        },
        {
          model: "heading2",
          view: "h2",
          title: "Heading 2",
          class: "ck-heading_heading2",
        },
        {
          model: "heading3",
          view: "h3",
          title: "Heading 3",
          class: "ck-heading_heading3",
        },
      ],
    },
    fontSize: {
      options: [
        9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 23, 25, 27, 29, 31,
        33,
      ],
    },
    alignment: {
      options: ["justify", "left", "center", "right"],
    },
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
        ""
      )}
    </div>
  );
};

export default TextEditor;
