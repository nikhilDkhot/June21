/*JavaScript Modules enables you to divide your code into multiple files 
which makes it easier to maintain a code-base.
*/
/*A module is a function or group of similar functions. They are grouped 
together within a file and contain the code to execute a specific task 
when called into a larger application.
*/
//Modules are imported using the import statement from the external files.

//Named Exports
/*Named exports allow you to export multiple values from a module by their names, enabling 
selective imports.
*/
export const value1 = 42;
export function func() { return 'hello'; }
func()

/*If you want to import every public function from another module, use the 
asterisk * keyword*/

