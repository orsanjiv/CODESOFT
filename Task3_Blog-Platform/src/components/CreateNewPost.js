import React from "react";

const CreateNewPost = (props) => {
  return (
    <>
      <form onSubmit={props.savePost} >
        <h5>Create New Post</h5>
        <label className="col-sm-12 col-form-label">
          <input
            className="form-control form-control-sm"
            autoFocus={true}
            type="text"
            placeholder="Title"
            onChange={props.savePostTitleToState}
            required
            ref={props.getTitle}
          />
        </label>
        <br />
        <label className="col-sm-12 col-form-label">
          <textarea
            className="form-control form-control-sm"
            placeholder="Description"
            onChange={props.savePostContentToState}
            rows="18"
            cols="41"
            required
            ref={props.getContent}
          />
        </label>
        <br />
        <button title="save post" className="btn btn-success ml-3">
          Upload
        </button>
      </form>
    </>
  );
};

export default CreateNewPost;
