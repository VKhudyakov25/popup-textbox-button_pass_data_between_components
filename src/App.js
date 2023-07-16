import "devextreme/dist/css/dx.dark.css";
import "./App.css";
import Button from "devextreme-react/button";
import TextBox from "devextreme-react/text-box";
import Popup, { Position } from "devextreme-react/popup";
import { useCallback, useState } from "react";

function App() {
  const [value, setValue] = useState(["", ""]);
  const [visible, setVisible] = useState(false);

  const handleValueChange = useCallback(
    (v, i) => {
      let nextValue = value.slice();
      nextValue[i] = v;
      setValue(nextValue);
    },
    [value]
  );

  const toggle = () => {
    setVisible(!visible);
  };

  return (
    <div className="App">
      <TextBox
        className="textbox"
        value={value[0]}
        onValueChange={(e) => handleValueChange(e, 0)}
        label="Link"
        labelMode="floating"
      />
      <Button text="Click me!" type="success" onClick={toggle} />
      {value[1]}
      <Popup
        visible={visible}
        hideOnOutsideClick={true}
        showTitle={true}
        title="Search"
        onHiding={toggle}
        width={500}
        height={500}
        contentRender={() => renderContent(value, handleValueChange, toggle)}
      >
        <Position my="left bottom" at="center" of="window" />
      </Popup>
    </div>
  );
}

const renderContent = (value, handleValueChange, toggle) => {
  return (
    <div className="App">
      <TextBox
        className="textbox"
        value={value[0]}
        onValueChange={(e) => handleValueChange(e, 1)}
      />
      <Button text="Click me!" type="success" onClick={toggle} />
    </div>
  );
};

export default App;
