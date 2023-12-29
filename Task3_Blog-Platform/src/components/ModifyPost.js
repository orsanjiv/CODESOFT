import React from "react";

const ModifyPost = (props) => {
  return (
    <>
      <form>
        <h2>Modify Post</h2>
        <label className="col-sm-12 col-form-label">
          <input
            className="form-control form-control-sm"
            defaultValue={props.title}
            autoFocus={true}
            onChange={props.savePostTitleToState}
            placeholder="title"
            size="39"
          />
        </label>
        <br />
        <label className="col-sm-12 col-form-label">
          <textarea
            className="form-control form-control-sm"
            defaultValue={props.content}
            onChange={props.savePostContentToState}
            placeholder="contents"
            rows="18"
            cols="41"
          />
        </label>
        <button
          title="update changes"
          className="btn btn-success ml-3"
          onClick={props.updatePost}
        >
          Update 
        </button>
      </form>
    </>
  );
};
export default ModifyPost;
