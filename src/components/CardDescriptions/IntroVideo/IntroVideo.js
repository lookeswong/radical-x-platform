import React, { useCallback, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import useFormContext from "../../../hooks/useFormContext";

import './IntroVideo.css';
import closeIcon from '../../../images/close.svg';
import documentIcon from '../../../images/document-upload.svg';

export default function IntroVideo() {
  const { data, handleChange } = useFormContext();
  // React Dropzone set up code - refer to documentation (https://react-dropzone.js.org/#src)
  const {acceptedFiles, getRootProps, getInputProps} = useDropzone();
  const files = acceptedFiles.map(file => (
    <li key={file.path}>
      {file.path}
      <img src={closeIcon}/>
    </li>
  ));

  return (
    <div className="container--intro">
      <p>Intro Video</p>
      <div {...getRootProps({className: 'dropzone'})}>
        <input {...getInputProps()} id='descIntro' name='descIntro' value={data.descIntro} onChange={handleChange}/>
        <p>Drag n drop to upload your video</p>
        <img src={documentIcon}/>
      </div>
      <aside>
        <ul className='file-list'>{files}</ul>
      </aside>
    </div>
    // <div>
    //   {!isHidden && 
    //   <div className="container--intro">
    //     <p>Intro Video</p>
    //     {/* <form className='category-intro'>
    //       <input type="file"/>
    //     </form> */}
    //     <div {...getRootProps({className: 'dropzone'})}>
    //       <input {...getInputProps()}/>
    //       <p>Drag n drop to upload your video</p>
    //       <img src={documentIcon}/>
    //     </div>
    //     <aside>
    //       <ul className='file-list'>{files}</ul>
    //     </aside>
    //   </div>}
    // </div>
  )
}
