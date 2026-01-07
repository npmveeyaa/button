# @veeyaainnovatives/button

A reusable Button component for React applications with fully configurable styles. Default white/grey colors, all customizable via props.

## Installation

```bash
npm install @veeyaainnovatives/button --save
```

## Peer Dependencies

This package requires the following peer dependencies:

- `react` (^16.8.0 || ^17.0.0 || ^18.0.0)
- `react-dom` (^16.8.0 || ^17.0.0 || ^18.0.0)

## Usage

### Basic Usage

```jsx
import { Button } from '@veeyaainnovatives/button';

function App() {
  return (
    <Button onClick={() => console.log('Clicked')}>
      Click Me
    </Button>
  );
}
```

### With Custom Colors

```jsx
<Button
  backgroundColor="#4a90e2"
  color="#ffffff"
  hoverBackgroundColor="#357abd"
  hoverColor="#ffffff"
>
  Custom Button
</Button>
```

### Outline Button

```jsx
<Button
  variant="outline"
  borderColor="#4a90e2"
  color="#4a90e2"
  hoverBackgroundColor="#4a90e2"
  hoverColor="#ffffff"
>
  Outline Button
</Button>
```

### With Custom Width and Size

```jsx
<Button
  width="200px"
  height="56px"
  padding="12px 30px"
  fontSize="18px"
>
  Custom Size
</Button>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | **Required** | Button content |
| `onClick` | `function` | `undefined` | Click handler |
| `type` | `string` | `'button'` | Button type (button, submit, reset) |
| `disabled` | `boolean` | `false` | Disabled state |
| `className` | `string` | `''` | Additional CSS classes (allows external CSS override) |
| `variant` | `string` | `'default'` | Button variant ('default', 'outline', 'text') |
| `backgroundColor` | `string` | `'#ffffff'` | Background color |
| `color` | `string` | `'#333333'` | Text color |
| `borderColor` | `string` | `backgroundColor` | Border color |
| `hoverBackgroundColor` | `string` | `'#e9ecef'` | Hover background color |
| `hoverColor` | `string` | `color` | Hover text color |
| `hoverBorderColor` | `string` | `borderColor` | Hover border color |
| `width` | `string` | `'auto'` | Button width |
| `minWidth` | `string` | `'auto'` | Minimum width |
| `height` | `string` | `'44px'` | Button height |
| `padding` | `string` | `'10px 24px'` | Button padding |
| `borderRadius` | `string` | `'100px'` | Border radius |
| `borderWidth` | `string` | `'0px'` | Border width |
| `fontSize` | `string` | `'16px'` | Font size |
| `fontWeight` | `string` | `'500'` | Font weight |
| `icon` | `string\|ReactNode` | `undefined` | Icon (FontAwesome class string or React node) |
| `iconPosition` | `string` | `'left'` | Icon position ('left' or 'right') |
| `defaultText` | `string` | `undefined` | Default text (for hover text change) |
| `hoverText` | `string` | `undefined` | Text to show on hover (requires defaultText) |
| `customStyles` | `object` | `{}` | Additional inline styles |

## Examples

### Default Button (White/Grey)

```jsx
<Button onClick={handleClick}>
  Default Button
</Button>
```

### Custom Styled Button

```jsx
<Button
  backgroundColor="#4a90e2"
  color="#ffffff"
  hoverBackgroundColor="#357abd"
  borderRadius="100px"
  padding="13px 40px"
  fontSize="16px"
  fontWeight="500"
>
  Custom Button
</Button>
```

### Full Width Button

```jsx
<Button
  width="100%"
  height="56px"
  backgroundColor="#4a90e2"
  color="#ffffff"
>
  Full Width Button
</Button>
```

### Outline Button

```jsx
<Button
  variant="outline"
  borderColor="#4a90e2"
  color="#4a90e2"
  hoverBackgroundColor="#4a90e2"
  hoverColor="#ffffff"
  borderWidth="3px"
  borderRadius="100px"
>
  Outline Button
</Button>
```

### Text Button

```jsx
<Button
  variant="text"
  color="#4a90e2"
  hoverBackgroundColor="transparent"
  hoverColor="#357abd"
>
  Text Button
</Button>
```

### With Icon

```jsx
<Button
  icon="fa fa-download"
  iconPosition="left"
  onClick={handleDownload}
>
  Download
</Button>
```

### With Hover Text Change

```jsx
<Button
  icon="fa fa-phone"
  defaultText="Contact Us"
  hoverText="+1 234 567 8900"
  backgroundColor="#4a90e2"
  color="#ffffff"
  hoverBackgroundColor="#357abd"
>
</Button>
```

### With Icon and Hover Text

```jsx
<Button
  icon="fa fa-envelope me-2"
  iconPosition="left"
  defaultText="Send Message"
  hoverText="hello@example.com"
  variant="outline"
  borderColor="#4a90e2"
  color="#4a90e2"
  hoverBackgroundColor="#4a90e2"
  hoverColor="#ffffff"
>
</Button>
```

### With External CSS Override

```jsx
// Your external CSS
.my-custom-button {
  background: linear-gradient(90deg, #4a90e2, #357abd);
}

// Component
<Button
  className="my-custom-button"
  backgroundColor="#4a90e2"
>
  Custom Styled
</Button>
```

## CSS Classes

The component uses these base classes that can be overridden:

- `.veeyaa-button` - Base button class
- `.veeyaa-button-default` - Default variant
- `.veeyaa-button-outline` - Outline variant
- `.veeyaa-button-text` - Text variant
- `.veeyaa-button-disabled` - Disabled state

You can override any styles using external CSS by targeting these classes or adding your own classes via the `className` prop.

## Importing Styles

The CSS is automatically imported when you import the component. If you need to import it separately:

```jsx
import '@veeyaainnovatives/button/styles.css';
```

## License

MIT

