const modelBg = document.querySelector(".model-bg");
const modelClose = document.querySelector(".close-model");

const showModel = () => {
  modelBg.classList.add("bg-active");
};
const closeModel = () => {
  modelBg.classList.remove("bg-active");
};

$(document).on("click", ".surveyRadioOption", function (e) {
  let t, r, s;
  (e && e.originalEvent && 0 === e.originalEvent.detail) ||
    ((s = $(this)),
    $("input", this)
      .prop("checked", !0)
      .promise()
      .done(function () {
        let n,
          i,
          a,
          s,
          c,
          u,
          d,
          f,
          h = $(this);
        (n = h.closest("[data-survey-step]").attr("data-survey-step")),
          (i = (i = h.next("span").text()).trim()),
          (a = $(this).find(".surveyStepHeadline").text().trim()),
          h
            .closest(".surveyStep")
            .find(".surveyStepNextButton")
            .is(":visible") ||
            0 == t ||
            ((u = (c = $(this).closest(".surveyStep_v").length > 0)
              ? $(this).closest(".surveyStep_v")
              : $(this).closest(".surveyStep")),
            r !== undefined
              ? "end" == r
                ? b(
                    u.closest(".surveyForm").attr("data-complete"),
                    (s = u.closest(".surveyForm").attr("id"))
                  )
                : ((s = u.closest(".surveyForm").attr("id")),
                  (d = $("#" + s + " [data-survey-step='" + r + "']")).hasClass(
                    "surveyStep_v"
                  )
                    ? (u.hide(),
                      $(".surveyStepGroup").hide(),
                      d.closest(".surveyStepGroup").show(),
                      h.closest(".surveyStep_v").hide(),
                      d.show(),
                      y(s, u))
                    : (u.hide(),
                      $(".surveyStepGroup").hide(),
                      d.show(),
                      y(s, u)))
              : ((f = u.next()),
                c &&
                  0 === f.length &&
                  (f = $(this).closest(".surveyStep").next()),
                0 == f.length
                  ? (u.closest(".surveyForm").attr("data-complete"),
                    (s = u.closest(".surveyForm").attr("id")))
                  : f.hasClass("surveyStepGroup")
                  ? u.hide()
                  : (u.hide(), f.show()),
                e.originalEvent == undefined &&
                  f.find(".surveyRadioOption input").first().focus()));
      }));
});

$(document).ready(function () {
  $(".final").click(function () {
    showModel();
  });
  $(".first").click(function () {
    $(".surveyStepProgressCounter").css("width", "30%");
  });
  $(".second").click(function () {
    $(".surveyStepProgressCounter").css("width", "60%");
  });
  $(".third").click(function () {
    $(".surveyStepProgressCounter").css("width", "100%");
  });
});
modelClose.addEventListener("click", closeModel);
