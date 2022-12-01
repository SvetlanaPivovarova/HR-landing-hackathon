const buttonQuiz = document.querySelector(".quiz__button_type_blue");
const quiz = document.querySelector(".quiz");
const roleOpenClass = "quiz_type_role_active";

const openReviewRole = () => {
  const reviewCard = quiz.querySelector(".quiz_type_review");
  reviewCard.classList.add(roleOpenClass);
  // buttonQuiz.removeEventListener();
};

buttonQuiz.addEventListener("click", function () {
  openReviewRole();
});
