export default function VariableTypes() {
  const numberVariable = 123;
  const floatingPointNumber = 234.345;
  const stringVariable = "Hello World!";
  const booleanVariable = true;
  const isNumber = typeof numberVariable;
  const isString = typeof stringVariable;
  const isBoolean = typeof booleanVariable;
  return (
    <div id="wd-variable-types">
      <h4>Variables Types</h4>
      numberVariable = {numberVariable}
      <br />
      floatingPointNumber = {floatingPointNumber}
      <br />
      stringVariable = {stringVariable}
      <br />
      booleanVariable = {booleanVariable + ""}
      <br />
      isNumber = {isNumber}
      <br />
      isString = {isString}
      <br />
      isBoolean = {isBoolean}
      <hr />
    </div>
  );
}
