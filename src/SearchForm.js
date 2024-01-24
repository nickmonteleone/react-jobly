import "./SearchForm.css"

import { useState } from "react";

/**
 * renders a search form component
 *
 * props: handleSave()
 *
 * state: formData {...}
 *
 *{JobsList, CompaniesList } -> SearchForm
*/

function SearchForm({handleSave}) {
  const [formData, setFormData] = useState({searchText: ""})

  /** Handle input to form. */
  function handleChange(evt) {
    const {name, value } = evt.target;
    setFormData(fData => ({
      ...fData,
      [name]: value
    }));
  }

  /** Call callback function on form submit. */
  function handleSubmit(evt) {
    evt.preventDefault();
    console.log('handleSubmit formData', formData)
    handleSave(formData.searchText);
  }

  return (
    <form className='SearchForm form-group'>
      <input
        className="form-control"
        name='searchText'
        onChange={handleChange}
        placeholder="Enter search term..."
      />
      <button className="btn-secondary btn" onClick={handleSubmit}>Search</button>
    </form>
  )
}

export default SearchForm;
