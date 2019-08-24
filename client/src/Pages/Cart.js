import * as React from "react";
import * as PropTypes from "prop-types";
import { Link } from "react-router-dom";

import getTheme from "react-uwp/styles/getTheme";
import Icon from "react-uwp/Icon";
import DropDownMenu from "react-uwp/DropDownMenu";
import ColorPicker from "react-uwp/ColorPicker";
import CheckBox from "react-uwp/CheckBox";
import TextBox from "react-uwp/TextBox";


class Cart extends React.Component<any> {

    static contextTypes = { theme: PropTypes.object };
    context: { theme: ReactUWP.ThemeType };
  
    fileInput: HTMLInputElement;
  
    render() {const { theme } = this.context;
    const styles = getStyles(this);

    return (
      <div style={styles.root}>
        <div style={styles.content}>
          <div style={{ marginTop: 24 }}>
            <p style={{ fontSize: 18, lineHeight: 1.6 }}>
              Add Item of your choice!
            </p>
            {/* <DropDownMenu
              values={[
                "Dark",
                "Light"
              ]}
              background={theme.useFluentDesign ? theme.acrylicTexture80.background : theme.chromeLow}
              defaultValue={theme.isDarkTheme ? "Dark" : "Light"}
              onChangeValue={value => {
                theme.saveTheme(getTheme({
                  themeName: value.toLowerCase() as any,
                  accent: theme.accent,
                  useFluentDesign: theme.useFluentDesign,
                  desktopBackgroundImage: theme.desktopBackgroundImage
                }));
              }}
            /> */}
            <CheckBox
              style={{ marginLeft: 8 }}
              defaultChecked={theme.useFluentDesign}
              label="Shipping"
              onCheck={useFluentDesign => {
                theme.saveTheme(getTheme({
                  themeName: theme.themeName,
                  accent: theme.accent,
                  useFluentDesign,
                  desktopBackgroundImage: theme.desktopBackgroundImage
                }));
              }}
            />
             <CheckBox
              style={{ marginLeft: 8 }}
              defaultChecked={theme.useFluentDesign}
              label="Pick Up"
              onCheck={useFluentDesign => {
                theme.saveTheme(getTheme({
                  themeName: theme.themeName,
                  accent: theme.accent,
                  useFluentDesign,
                  desktopBackgroundImage: theme.desktopBackgroundImage
                }));
              }}
            />
            
          </div>
        </div>
       
      </div>
    );
  }
}

function getStyles(customTheme: CustomTheme): {
  root?: React.CSSProperties;
  content?: React.CSSProperties;
} {
  const {
    context: { theme }
  } = customTheme;
  const { prefixStyle } = theme;

        return{
             content:prefixStyle({
                padding: 20,
                margin: "0 auto",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                flexWrap: "wrap"
              })
        };
          }
          

export default Cart;