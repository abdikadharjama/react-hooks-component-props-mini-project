import React from 'react';

function Article({ title, date = "January 1, 1970", preview, minutes }) {
  const emoji = minutes < 30 ? "☕️" : "🍱";
  const interval = minutes < 30 ? 5 : 10;
  const emojisCount = Math.ceil(minutes / interval);
  const emojis = Array(emojisCount).fill(emoji).join('');

  return (
    <article>
      <h3>{title}</h3>
      <small>{date} • {emojis} {minutes} min read</small>
      <p>{preview}</p>
    </article>
  );
}

export default Article;
