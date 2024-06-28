// Write your solution in this file!

var customerName = "bob";
function getCustomerName() {
    return customerName;
  }

function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}
function setBestCustomer() {
    bestCustomer = 'not bob';
  } 
function overwriteBestCustomer(newCustomer) {
    bestCustomer = newCustomer;
  }
  const leastFavoriteCustomer = 'someone';

  function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'another person';
  } 