import moment from "moment"; 

export { formatDate };

const formatDate = (date) => {
  return moment(date).format("dddd Do MMMM YYYY");

};
