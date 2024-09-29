import React, { useState } from 'react';
import './CommentsList.css';

// Компонент для отображения списка комментариев
const CommentsList = () => {
  // Инициализируем состояние с несколькими комментариями
  const [comments, setComments] = useState([
    { id: 1, text: "Это первый комментарий" },
    { id: 2, text: "Это второй комментарий" },
    { id: 3, text: "Это третий комментарий" }
  ]);

  // Функция для удаления комментария по его id
  const deleteComment = (id) => {
    setComments(comments.filter(comment => comment.id !== id));
  };

  return (
    <div>
      <h2>Список комментариев</h2>
      {comments.length > 0 ? (
        <ul>
          {comments.map(comment => (
            <li key={comment.id}>
              {comment.text}
              <button onClick={() => deleteComment(comment.id)} style={{ marginLeft: '10px' }}>
                Удалить
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>Нет комментариев</p>
      )}
    </div>
  );
};

export default CommentsList;
