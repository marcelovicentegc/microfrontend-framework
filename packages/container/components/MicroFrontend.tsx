import React from "react";

class MicroFrontend extends React.Component<MicroFrontendProps> {
  componentDidMount() {
    const { name, host } = this.props;
    const scriptId = `micro-frontend-script-${name}`;

    if (document.getElementById(scriptId)) {
      this.renderMicroFrontend();
      return;
    }

    fetch(`${host}/asset-manifest.json`)
      .then((res) => res.json())
      .then((manifest) => {
        const script = document.createElement("script");
        script.id = scriptId;
        script.crossOrigin = "";
        script.src = `${host}${manifest["main.js"]}`;
        script.onload = this.renderMicroFrontend;
        document.head.appendChild(script);
      });
  }

  componentWillUnmount() {
    const { name } = this.props;

    // @ts-ignore
    window[`unmount${name}`](`${name}-container`);
  }

  renderMicroFrontend = () => {
    const { name } = this.props;

    // @ts-ignore
    window[`render${name}`](`${name}-container`, window.history);
  };

  render() {
    return <main id={`${this.props.name}-container`} />;
  }
}

interface MicroFrontendProps {
  name: string;
  host: string;
}

export default MicroFrontend;
