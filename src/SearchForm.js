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
  return (
    <div className='SearchForm'>
      Search Form component
    </div>
  )
}

export default SearchForm;
