export let navigateToStudentDetails = null;
export let navigateToAddStudent = null;

export function initializeNavigationFunctions(toStudentDetails, toAddStudent) {
  navigateToStudentDetails = toStudentDetails;
  navigateToAddStudent = toAddStudent;
}
