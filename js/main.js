"use strict";
const questions = document.querySelectorAll(".question_item");

questions.forEach((question) => {
    const toggle_q = question.querySelector(".toggle");
    const question_item = question.querySelector(".question");
    const arrow = question.querySelector(".icon_arrow");
    question.addEventListener("click", () => {
        toggle_q.classList.toggle("show");
        question_item.classList.toggle("active");
        arrow.classList.toggle("arrow");
    });
});