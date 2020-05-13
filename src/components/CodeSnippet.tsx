import React, { ReactNode, useEffect, useState } from "react"
import AceEditor from "react-ace";
import styled from "styled-components";
import FileCopyIcon from '@material-ui/icons/FileCopy';
import copy from 'copy-to-clipboard';

import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-twilight";

const Div = styled.div`
  left: 2em;
  top: 5.5em;
  // position: absolute;  
`;

const CodeSnippet = () => {
  const [snippetValue, setSnippetValue] = useState("")

  function onChange(newValue :string) {
    setSnippetValue(newValue)
  }

  function copyToClipboard() {
    copy(snippetValue)
  }

  return (
    <Div>
      <AceEditor
        mode="javascript"
        theme="twilight"
        height="84.7vh"
        width="50vw"
        value={snippetValue}
        onChange={onChange}
        name="UNIQUE_ID_OF_DIV"
        editorProps={{ $blockScrolling: Infinity }}
        setOptions={{
          enableBasicAutocompletion: true,
          enableLiveAutocompletion: true,
          enableSnippets: true,
          showLineNumbers: true,
          tabSize: 2,
          }}
      />
      <button onClick={copyToClipboard}><FileCopyIcon /></button>
    </Div>
    )
};

export default CodeSnippet;
