# React-MDL SelectField

Extra components for [React Material Design Lite](https://github.com/tleunen/react-mdl)

## Installation

```
npm install --save react-mdl-extra
```

## Examples

https://hribb.github.io/react-mdl-extra/

```
git clone https://github.com/HriBB/react-mdl-extra
cd react-mdl-extra
npm install
npm run storybook
open http://localhost:9002/
```

## Usage

### SelectField

```
import { SelectField, Option } from 'react-mdl-extra';

render() {
  return() (
    <SelectField label={'Select me'} value={3}>
      <Option value={1}>One</Option>
      <Option value={2}>Two</Option>
      <Option value={3}>Three</Option>
      <Option value={4}>Four</Option>
      <Option value={5}>Five</Option>
    </SelectField>
  );
}
```

### MultiSelectField

```
import { MultiSelectField, Option } from 'react-mdl-extra';

render() {
  return() (
    <MultiSelectField label={'Select me many times'} value={[1,3]}>
      <Option value={1}>One</Option>
      <Option value={2}>Two</Option>
      <Option value={3}>Three</Option>
      <Option value={4}>Four</Option>
      <Option value={5}>Five</Option>
    </MultiSelectField>
  );
}
```

### Menu

```
import { Menu, MenuItem } from 'react-mdl-extra';

render() {
  return() (
    <Menu target={<Button raised>Open menu</Button>}>
      <MenuItem>One</MenuItem>
      <MenuItem>Two</MenuItem>
      <MenuItem>Three</MenuItem>
    </Menu>
  )
}
```

## TODO

- [ ] Remove sass dependency from the project
- [x] Use Tether for dropdown positioning
- [ ] Improve position declaration
- [x] Create `MultiSelectField`
- [ ] Create `AutoCompleteField`
- [ ] Create `DatePickerField`
- [ ] Fix focus handling
- [ ] Add key bindings
- [ ] Add tests
