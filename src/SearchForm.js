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
//TODO: build out form to get input for namelikesearch, call callback on submit


  function handleChange(evt) {
    const {name, value } = evt.target;
    setFormData(fData => ({
      ...fData,
      [name]: value
    }));
  }


  function handleSubmit(evt) {
    evt.preventDefault();
    console.log('handleSubmit formData', formData)
    handleSave(formData.searchText);
  }




  return (
    <form className='SearchForm'>
      <input name='searchText' onChange={handleChange}></input>
      <button onClick={handleSubmit}>Search</button>
    </form>
  )
}

export default SearchForm;
