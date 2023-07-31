import React from "react";

class Clock extends React.Component {
  state = {
    date: new Date(),
    locale: "en-US",
  };

  componentDidMount() {
    this.clockTimer = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.clockTimer);
  }

  handleClick = (locale) => {
    this.setState({
      locale,
    });
  };

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    const { date, locale } = this.state;

    return (
      <div className="clock">
        <h1 className="time">{date.toLocaleTimeString(locale)}</h1>
        {locale === "bn-BD" ? (
          <Button change={this.handleClick} locale="en-US" show />
        ) : (
          <Button change={this.handleClick} locale="bn-BD" show={false} />
        )}
      </div>
    );
  }
}

class Button extends React.Component {
  shouldComponentUpdate(nextProps) {
    const { change: currentChange, locale: currentLocale } = this.props;
    const { change: nextChange, locale: nextLocale } = nextProps;

    if (currentChange === nextChange && nextLocale === currentLocale) {
      return false;
    } else {
      return true;
    }
  }

  render() {
    const { change, locale, show, enable } = this.props;
    // if (!enable) return null

    return (
      <div>
        <button className="button" type="button" onClick={() => change(locale)}>
          {locale === "bn-BD" ? "Change Clock" : "ঘড়ি পরিবর্তন করুন"}
        </button>
      </div>
    );
  }
}

export default Clock;
