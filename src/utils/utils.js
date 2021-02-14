export const scheduleExtractor = (data) => {
  let sortedData = data.sort(
    (a, b) => new Date(a.fields.startTime) - new Date(b.fields.startTime)
  );
  let schedule = {};
  sortedData.forEach((s) => {
    const date = dateExtractor(s.fields.startTime);
    const event = eventsExtractor(s.fields);
    schedule[date] ? schedule[date].push(event) : (schedule[date] = [event]);
    return;
  });
  return schedule;
};

export const eventsExtractor = (attributes) => {
  const startTime = timeExtractor(attributes.startTime);
  const time = attributes.endTime
    ? `${startTime}-${timeExtractor(attributes.endTime)}`
    : startTime;
  let event = {
    description: attributes.description,
    time: time,
    type: attributes.type,
    theme: colorTheme(attributes.type),
    title: attributes.title,
    location: attributes.link,
    audience: attributes.audience || "",
    company: attributes.company || "",
    isLive: isLive(attributes),
  };

  return event;
};

export const colorTheme = (type) => {
  switch (type) {
    case "Everyone!":
      return "#e56138";
    case "Activity":
      return "#36bc7c";
    case "Workshop":
      return "#598ebf";
    default:
      return "#000";
  }
};

export const dateExtractor = (date) => {
  let dateString = new Date(date).toString();
  let splitString = dateString.split(" ");

  return `${splitString[1] || ""} ${splitString[2] || ""}`;
};

export const timeExtractor = (time) => {
  let dateString = new Date(time);
  let hours = dateString.getHours();
  let mins = dateString.getMinutes();
  let suffix = hours >= 12 ? "PM" : "AM";
  let formattedMins = mins < 10 ? `0${mins}` : mins;

  return `${((hours + 11) % 12) + 1}:${formattedMins} ${suffix}`;
};

export const isLive = (data) => {
  const currentTime = new Date();
  const startTime = new Date(data.startTime);
  const endTime = data.endTime ? new Date(data.endTime) : null;
  return (
    endTime !== null &&
    endTime !== undefined &&
    currentTime <= endTime &&
    currentTime >= startTime
  );
};
