import React from 'react';
import { useDropzone } from 'react-dropzone';

import './Guide.css';
import '../IntroVideo/IntroVideo.css';
import closeIcon from '../../../images/close.svg';
import documentIcon from '../../../images/document-upload.svg';
import searchButton from '../../../images/search-normal.svg';

export default function Guide({name}) {
  // React Dropzone set up code - refer to documentation (https://react-dropzone.js.org/#src)
  const {acceptedFiles, getRootProps, getInputProps} = useDropzone();
  const files = acceptedFiles.map(file => (
    <li key={file.path}>
      {file.path}
      <img src={closeIcon}/>
    </li>
  ));

  return (
    <div className='guide-desc'>
      <p>{name}</p>
      <div className='guide-desc-form'>
        <input type="text" placeholder='Description'/>
        <img src={searchButton} alt=""/>
      </div>
      <div>
        <div {...getRootProps({className: 'dropzone'})}>
          <input {...getInputProps()}/>
          <p>Drag n drop to upload your video</p>
          <img src={documentIcon}/>
        </div>
        <aside>
          <ul className='file-list'>{files}</ul>
      </aside>
      </div>
    </div>
  )
}
