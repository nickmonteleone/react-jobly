const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

/** API Class.
 *
 * Static class tying together methods used to get/send to the API.
 * There shouldn't be any frontend-specific stuff here, and there shouldn't
 * be any API-aware stuff elsewhere in the frontend.
 *
 */

class JoblyApi {
  // Remember, the backend needs to be authorized with a token
  // We're providing a token you can use to interact with the backend API
  // DON'T MODIFY THIS TOKEN
  static token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZ" +
    "SI6InRlc3R1c2VyIiwiaXNBZG1pbiI6ZmFsc2UsImlhdCI6MTU5ODE1OTI1OX0." +
    "FtrMwBQwe6Ue-glIFgz_Nf8XxRT2YecFCiSpYL0fCXc";

  /** Static method to request data from back-end api
   *
   * Inputs:
   * - endpoint (not including base_url)
   * - data (obj or array to be converted into json body)
   * - method (default "GET")
   *
   * Return:
   * - request result json obj
   */

  static async request(endpoint, data = {}, method = "GET") {
    const url = new URL(`${BASE_URL}/${endpoint}`);
    const headers = {
      authorization: `Bearer ${JoblyApi.token}`,
      'content-type': 'application/json',
    };

    url.search = (method === "GET")
      ? new URLSearchParams(data).toString()
      : "";

    // set to undefined since the body property cannot exist on a GET method
    const body = (method !== "GET")
      ? JSON.stringify(data)
      : undefined;

    const resp = await fetch(url, { method, body, headers });

    if (!resp.ok) {
      console.error("API Error:", resp.statusText, resp.status);
      const message = (await resp.json()).error.message;
      throw Array.isArray(message) ? message : [message];
    }

    return await resp.json();
  }

  // Individual API routes

  /** Get details on a company by handle.
   *
   * Input company handle.
   * Returns { handle, name, description, numEmployees, logoUrl, jobs }
   * where jobs is [{ id, title, salary, equity }, ...]
  */

  static async getCompany(handle) {
    let res = await this.request(`companies/${handle}`);
    return res.company;
  }

  /** Get list of companies, optional nameLike filter to search.
   *
   * Inputs: string to search for nameLike (optional)
   * Returns [ { handle, name, description, numEmployees, logoUrl }, ...]
   * for companies that match search nameLike (or all companies if no search)
  */

  static async getAllCompanies(nameLikeSearch=null) {
    let data = {};
    if (nameLikeSearch !== null) {
      data.nameLike = nameLikeSearch;
    }

    let res = await this.request(`companies`, data);
    return res.companies;
  }

  /** Get list of jobs, optional title filter to search.
   *
   * Inputs: string to search for title (optional)
   * Returns [ { id, title, salary, equity, companyHandle, companyName }, ...]
   * for jobs that match search title (or all jobs if no search)
  */

  static async getJobs(titleSearch=null) {
    let data = {};
    if (titleSearch !== null) {
      data.title = titleSearch;
    }

    const res = await this.request(`jobs`, data);
    return res.jobs;
  }
}

export default JoblyApi;