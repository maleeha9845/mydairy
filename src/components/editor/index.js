import React from 'react';
import ReactDOM from 'react-dom';
import  {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {MdArrowDropDownCircle} from 'react-icons/md';
import {IoMdArrowDropupCircle} from 'react-icons/io';
import './editor.css';
import { Editor } from 'react-draft-wysiwyg';
import { EditorState,
         draftToHtml,
         createEditorStateWithText,
         CompositeDecorator,
         convertFromHTML,
         convertToHTML,
         convertToRaw ,
         createFromBlockArray,
         convertFromRaw,
         ContentState,
         getDefaultKeyBinding,} from 'draft-js';


class MyEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (

         <div>
          <div class ='tool-div'>
          <div class='editor-short' >
          <Editor
           onEditorStateChange= {this.onEditorStateChangeWithContent}
           toolbarClassName="tool-bar"
           editorClassName = 'editor-bar'
          editorState={this.state.editorStateWithContent}
           toolbar={{
                options: ['inline', 'blockType', 'fontSize', 'fontFamily', 'textAlign', 'colorPicker', 'emoji', 'image'],
                inline: { inDropdown: false , options:['bold' , 'italic' , 'underline']},
                blockType:{inDropdown:true},
                textAlign:{inDropdown:true},
                image: { uploadCallback: this.uploadImageCallBack ,previewImage: true,},
                inputAccept: 'image/gif,image/jpeg,image/jpg,image/png,image/svg',
              }
                }
              />
</div>
