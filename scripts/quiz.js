const buttonQuiz = document.querySelector(".quiz__button_type_blue");
const quiz = document.querySelector(".quiz");
const roleOpenClass = "quiz__block_type_active";
const quizCloseClass = "quiz__block_type_unactive";

const openReviewRole = () => {
  const blockQuestion = quiz.querySelector(".quiz__block_type_question");
  const blockAnswer = quiz.querySelector(".quiz__block_type_answer");

  blockQuestion.classList.remove(roleOpenClass);
  blockQuestion.classList.add(quizCloseClass);
  blockAnswer.classList.remove(quizCloseClass);
  blockAnswer.classList.add(roleOpenClass);
  // buttonQuiz.removeEventListener();
};

buttonQuiz.addEventListener("click", function () {
  openReviewRole();
});
