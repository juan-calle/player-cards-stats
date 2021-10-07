import fetchData from '../api/apiServices.js';
import markup from './htmlTemplate.js';
const { data } = await fetchData;

export default {
  render() {
    return this.html();
  },
  html() {
    let generatedMarkup = '';
    generatedMarkup += markup.openWrapper();
    generatedMarkup += markup.playerSelector();
    generatedMarkup += markup.playerInfo();
    generatedMarkup += markup.closeWrapper();
    return generatedMarkup;
  },
};
