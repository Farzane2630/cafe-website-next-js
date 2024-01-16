import React from 'react'

export default function Form({ submitForm, register, handleSubmit, errors, reset }) {

  return (
    <form
          className="form-inline justify-content-center mb-4"
          onSubmit={handleSubmit(submitForm)}
          style={{display: "flex", flexDirection: "column", justifyContent:"flex-start", rowGap: "8px"}}
        >
          <div className="input-group">
            <input
            {...register('email', {required: true})}
              type="text"
              className="form-control p-4"
              placeholder="Your Email"
              style={{ height: "60px" }}
            />
            <div className="input-group-append">
              <button
                className="btn btn-primary font-weight-bold px-4"
                type="submit"
                >
                Join
              </button>
            </div>
          </div>
                {errors.email && (<p style={{background: "#fff", color: "#999"}}>❌ Email is required! ❌</p>)}
        </form>
  )
}
