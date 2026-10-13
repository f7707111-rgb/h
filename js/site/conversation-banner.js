/* Self-contained adaptation of the supplied Cofounder reference's motion:
   scene entrance: 450ms ease-out, translateY(20px) -> 0;
   task card/connector: 520ms cubic-bezier(.22,1,.36,1);
   category cycle: 2000ms; sidebar/content crossfade: 200ms.
   No external runtime, tracking, AI, or live-chat backend. */
(() => {
  "use strict";
  const root = document.getElementById("conversation");
  if (!root) return;
  const copy = {
    ru: {
      title: "На связи.",
      titleSoft: "Без лишних слов.",
      intro:
        "Задать вопрос, уточнить детали или оставить обратную связь. Короткий диалог — понятный следующий шаг.",
      tab0: "Задай вопрос. Начнём с главного.",
      tab1: "Уточним детали. Всё в одном диалоге.",
      tab2: "Подведём итог. Без недосказанности.",
      chat0: "Вопрос",
      chat1: "Уточнение",
      chat2: "Обратная связь",
      dialogTitle: "Переписка с kiki",
      example: "Пример диалога",
      to: "Участник",
      subject: "Тема",
      you: "Ты",
      review: "Вопрос",
      running: "Уточнение",
      complete: "Ответ",
      waiting: "Дальше",
      byKiki: "ДИАЛОГ",
      together: "СЛЕДУЮЩИЙ ШАГ",
      category0: "Вопрос",
      category1: "Детали",
      category2: "Сроки",
      category3: "Файлы",
      category4: "Связь",
      flowTitle: "Один диалог",
      name: "Участник",
      flowName: "kiki",
      briefLabel: "Тема сообщения",
      brief: "Вопрос, уточнение или обратная связь.",
      addIdea: "Начать разговор",
      addDetails: "Уточнить детали",
      designer: "Собеседник",
      node0: "Вопрос",
      nodeSub0: "Что важно знать",
      node1: "Ответ",
      nodeSub1: "Коротко и по делу",
      node2: "Итог",
      nodeSub2: "Следующий шаг",
      andYou: "+ ты",
      previous: "Предыдущий пример",
      next: "Следующий пример",
      tabsLabel: "Общение с kiki",
      topicsLabel: "Темы переписки",
      chats: [
        {
          subjectText: "Можно уточнить?",
          projectName: "Начинаем разговор",
          request: "Привет! Можно уточнить пару моментов?",
          reply:
            "Привет. Конечно — напиши, что хочешь уточнить. Обсудим по порядку.",
        },
        {
          subjectText: "Всё в одном месте",
          projectName: "Уточняем детали",
          request: "Как лучше отправить материалы?",
          reply:
            "Можно одним сообщением. Если файлов много — ссылкой на папку. Так ничего не потеряется.",
        },
        {
          subjectText: "Хочу оставить комментарий",
          projectName: "Обратная связь",
          request: "Есть небольшой комментарий. Можно прислать?",
          reply:
            "Да. Напиши, к чему он относится, и что стоит уточнить. Скриншот поможет быстрее понять контекст.",
        },
      ],
      tasks: [
        [
          "Что хочется уточнить?",
          "Контекст вопроса",
          "Понятный ответ",
          "Есть ещё вопросы?",
        ],
        [
          "Что нужно проверить?",
          "Уточняем по пунктам",
          "Детали на месте",
          "Всё ли понятно?",
        ],
        [
          "Какой срок важен?",
          "Уточняем дату",
          "Фиксируем договорённость",
          "Проверяем актуальность",
        ],
        [
          "Какие материалы есть?",
          "Проверяем доступ",
          "Всё в одной папке",
          "Ничего не потерялось?",
        ],
        [
          "Где продолжить диалог?",
          "Один удобный канал",
          "Контекст сохранён",
          "Остаёмся на связи",
        ],
      ],
      extras: {
        idea: [
          "Начнём с вопроса",
          "Напиши, что хочется уточнить. Достаточно одного сообщения.",
        ],
        details: [
          "Уточним детали",
          "Добавь контекст или скриншот, если он поможет понять вопрос.",
        ],
        style: [
          "Понятный ответ",
          "Разберём вопрос по пунктам и проверим, что всё понятно.",
        ],
        files: [
          "Зафиксируем итог",
          "Коротко подведём итог и договоримся о следующем шаге.",
        ],
      },
      chatContext: "личный диалог",
      topicBadge: "тема",
    },
    en: {
      title: "Let’s talk.",
      titleSoft: "Without the extra words.",
      intro:
        "Ask a question, clarify the details, or share feedback. A short conversation, a clear next step.",
      tab0: "Ask a question. Start with what matters.",
      tab1: "Clarify the details. Keep it in one chat.",
      tab2: "Sum it up. Leave nothing unclear.",
      chat0: "Question",
      chat1: "Details",
      chat2: "Feedback",
      dialogTitle: "A chat with kiki",
      example: "Sample dialogue",
      to: "With",
      subject: "Topic",
      you: "You",
      review: "Question",
      running: "Clarify",
      complete: "Answer",
      waiting: "Next",
      byKiki: "DIALOGUE",
      together: "NEXT STEP",
      category0: "Question",
      category1: "Details",
      category2: "Timing",
      category3: "Files",
      category4: "Contact",
      flowTitle: "One conversation",
      name: "Participant",
      flowName: "kiki",
      briefLabel: "Message topic",
      brief: "A question, a clarification, or feedback.",
      addIdea: "Start a conversation",
      addDetails: "Clarify the details",
      designer: "Let’s talk",
      node0: "Question",
      nodeSub0: "What matters",
      node1: "Answer",
      nodeSub1: "Clear and direct",
      node2: "Summary",
      nodeSub2: "The next step",
      andYou: "+ you",
      previous: "Previous example",
      next: "Next example",
      tabsLabel: "A conversation with kiki",
      topicsLabel: "Conversation topics",
      chats: [
        {
          subjectText: "Can I ask something?",
          projectName: "Start the conversation",
          request: "Hey! Can I clarify a couple of things?",
          reply:
            "Hey. Of course — tell me what you want to clarify. We’ll go through it one point at a time.",
        },
        {
          subjectText: "Keep it in one place",
          projectName: "Clarify the details",
          request: "What’s the best way to send the materials?",
          reply:
            "One message works. If there are lots of files, send a folder link. It keeps everything together.",
        },
        {
          subjectText: "A quick comment",
          projectName: "Share feedback",
          request: "I have a small comment. Can I send it?",
          reply:
            "Yes. Say what it relates to and what needs clarifying. A screenshot helps explain the context.",
        },
      ],
      tasks: [
        [
          "What needs clarifying?",
          "The question’s context",
          "A clear answer",
          "Any other questions?",
        ],
        [
          "What needs checking?",
          "One point at a time",
          "Details in place",
          "Is everything clear?",
        ],
        [
          "Which date matters?",
          "Clarify the date",
          "Record the agreement",
          "Is it still current?",
        ],
        [
          "What materials are there?",
          "Check access",
          "One folder for everything",
          "Anything missing?",
        ],
        [
          "Where do we continue?",
          "One convenient channel",
          "Context kept together",
          "Keep in touch",
        ],
      ],
      extras: {
        idea: [
          "Start with a question",
          "Say what you want to clarify. One message is enough.",
        ],
        details: [
          "Clarify the details",
          "Add context or a screenshot if it helps explain the question.",
        ],
        style: [
          "A clear answer",
          "Go through each point and check that everything is clear.",
        ],
        files: [
          "Summarize it",
          "Keep a short summary and agree on the next step.",
        ],
      },
      chatContext: "direct conversation",
      topicBadge: "topic",
    },
  };
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
  const frame = root.querySelector(".cb-frame"),
    scenes = [...root.querySelectorAll("[data-scene]")],
    tabs = [...root.querySelectorAll("[data-cb-step]")];
  const taskCard = root.querySelector(".cb-task-card"),
    boardLine = root.querySelector(".cb-board-line");
  let scene = 0,
    chat = 0,
    category = 0,
    extra = null,
    visible = false,
    hover = false,
    focus = false,
    elapsed = 0,
    boardElapsed = 0,
    typedElapsed = 0,
    last = 0,
    raf = 0,
    rotation = 0,
    rowElapsed = 0;
  const words = () =>
    copy[document.documentElement.lang === "ru" ? "ru" : "en"];
  function animate(el, keyframes, duration = 200, easing = "ease-out") {
    if (!reduced.matches) el.animate(keyframes, { duration, easing });
  }
  function type() {
    const reply = words().chats[chat].reply;
    const count = reduced.matches
      ? reply.length
      : Math.max(0, Math.floor((typedElapsed - 350) / 24));
    root.querySelector(".cb-typed").textContent = reply.slice(0, count);
    root
      .querySelector(".cb-response")
      .classList.toggle("is-complete", count >= reply.length);
  }
  function drawTasks() {
    const values = words().tasks[category];
    root.querySelectorAll("[data-cb-task]").forEach((el, index) => {
      el.textContent = values[(index + rotation) % values.length];
    });
  }
  function positionCard() {
    const buttons = [...root.querySelectorAll("[data-category]")],
      canvas = root.querySelector(".cb-canvas").getBoundingClientRect(),
      r = buttons[category].getBoundingClientRect();
    const mid = r.left + r.width / 2 - canvas.left;
    taskCard.style.left =
      Math.max(24, Math.min(mid - 133.5, canvas.width - 267 - 24)) + "px";
    boardLine.style.left = mid + "px";
  }
  function render() {
    const t = words(),
      values = { ...t, ...t.chats[chat] };
    root.querySelectorAll("[data-cb]").forEach((el) => {
      const key = el.dataset.cb;
      if (values[key] !== undefined) el.textContent = values[key];
    });
    root.querySelector(".cb-tabs").setAttribute("aria-label", t.tabsLabel);
    root
      .querySelector(".cb-mini-tabs")
      .setAttribute("aria-label", t.topicsLabel);
    root.querySelector(".cb-prev").setAttribute("aria-label", t.previous);
    root.querySelector(".cb-next").setAttribute("aria-label", t.next);
    root.querySelector(".cb-counter").textContent = `${chat + 1}/3`;
    root
      .querySelectorAll("[data-chat]")
      .forEach((el) =>
        el.setAttribute(
          "aria-pressed",
          String(Number(el.dataset.chat) === chat),
        ),
      );
    root
      .querySelectorAll("[data-category]")
      .forEach((el) =>
        el.setAttribute(
          "aria-pressed",
          String(Number(el.dataset.category) === category),
        ),
      );
    tabs.forEach((tab, index) => {
      tab.setAttribute("aria-selected", String(index === scene));
      tab.tabIndex = index === scene ? 0 : -1;
    });
    frame.setAttribute("aria-labelledby", "cb-tab-" + scene);
    scenes.forEach((el, index) => {
      el.hidden = index !== scene;
    });
    drawTasks();
    type();
    renderExtra(false);
    if (scene === 1) positionCard();
    frame.classList.toggle("is-paused", hover || focus || reduced.matches);
  }
  function renderExtra(motion = true) {
    const el = root.querySelector(".cb-flow-extra");
    el.hidden = !extra;
    root
      .querySelectorAll("[data-flow-action]")
      .forEach((b) =>
        b.classList.toggle("is-active", b.dataset.flowAction === extra),
      );
    if (!extra) return;
    const text = words().extras[extra];
    el.querySelector("strong").textContent = text[0];
    el.querySelector("p").textContent = text[1];
    if (motion) animate(el, [{ opacity: 0 }, { opacity: 1 }]);
  }
  function selectScene(n, manual = false) {
    scene = n;
    elapsed = 0;
    boardElapsed = 0;
    typedElapsed = manual ? 10000 : 0;
    rowElapsed = 0;
    rotation = 0;
    if (manual) elapsed = -6000;
    render();
    animate(
      scenes[scene],
      [
        { opacity: 0, transform: "translateY(20px)" },
        { opacity: 1, transform: "translateY(0px)" },
      ],
      450,
    );
    ensureLoop();
  }
  function selectChat(n, manual = false) {
    chat = (n + 3) % 3;
    typedElapsed = manual ? 10000 : 0;
    render();
    animate(root.querySelector(".cb-dialog-paper"), [
      { opacity: 0 },
      { opacity: 1 },
    ]);
  }
  function selectCategory(n, manual = false) {
    category = n;
    rotation = 0;
    boardElapsed = manual ? -3000 : 0;
    rowElapsed = 0;
    render();
    animate(taskCard, [{ opacity: 0.3 }, { opacity: 1 }]);
  }
  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => selectScene(index, true));
    tab.addEventListener("keydown", (e) => {
      const next = {
        ArrowRight: (index + 1) % 3,
        ArrowLeft: (index + 2) % 3,
        Home: 0,
        End: 2,
      }[e.key];
      if (next === undefined) return;
      e.preventDefault();
      selectScene(next, true);
      tabs[next].focus();
    });
  });
  root
    .querySelectorAll("[data-chat]")
    .forEach((el) =>
      el.addEventListener("click", () =>
        selectChat(Number(el.dataset.chat), true),
      ),
    );
  root
    .querySelector(".cb-prev")
    .addEventListener("click", () => selectChat(chat - 1, true));
  root
    .querySelector(".cb-next")
    .addEventListener("click", () => selectChat(chat + 1, true));
  root
    .querySelectorAll("[data-category]")
    .forEach((el) =>
      el.addEventListener("click", () =>
        selectCategory(Number(el.dataset.category), true),
      ),
    );
  root.querySelectorAll("[data-flow-action]").forEach((el) =>
    el.addEventListener("click", () => {
      extra = extra === el.dataset.flowAction ? null : el.dataset.flowAction;
      renderExtra();
    }),
  );
  function canPlay() {
    return visible && !document.hidden && !hover && !focus && !reduced.matches;
  }
  function tick(now) {
    raf = 0;
    const dt = last ? Math.min(now - last, 80) : 0;
    last = now;
    if (canPlay()) {
      elapsed += dt;
      typedElapsed += dt;
      boardElapsed += dt;
      rowElapsed += dt;
      root.style.setProperty(
        "--cb-progress",
        Math.max(0, Math.min(elapsed / 12000, 1)),
      );
      if (scene === 0) type();
      if (scene === 1) {
        if (boardElapsed >= 2000) selectCategory((category + 1) % 5);
        if (rowElapsed >= 2800) {
          rowElapsed = 0;
          rotation = (rotation + 1) % 4;
          drawTasks();
        }
      }
      if (elapsed >= 12000) {
        if (scene === 0) chat = (chat + 1) % 3;
        selectScene((scene + 1) % 3);
      }
    }
    frame.classList.toggle("is-paused", !canPlay());
    if (visible && !document.hidden && !raf) raf = requestAnimationFrame(tick);
  }
  function ensureLoop() {
    if (raf) return;
    last = 0;
    if (visible && !document.hidden && !raf) raf = requestAnimationFrame(tick);
  }
  const observer = new IntersectionObserver(
    (entries) => {
      visible = entries[0].isIntersecting;
      if (!visible) {
        cancelAnimationFrame(raf);
        raf = 0;
        last = 0;
      }
      ensureLoop();
    },
    { threshold: 0.2 },
  );
  observer.observe(root);
  frame.addEventListener("pointerenter", (e) => {
    if (e.pointerType === "mouse") hover = true;
  });
  frame.addEventListener("pointerleave", () => {
    hover = false;
    ensureLoop();
  });
  root.addEventListener("focusin", () => {
    focus = true;
  });
  root.addEventListener("focusout", () => {
    setTimeout(() => {
      focus = root.contains(document.activeElement);
      ensureLoop();
    }, 0);
  });
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      cancelAnimationFrame(raf);
      raf = 0;
      last = 0;
    } else ensureLoop();
  });
  document.addEventListener("kiki:language", () => {
    typedElapsed = 10000;
    render();
  });
  reduced.addEventListener("change", () => {
    render();
    ensureLoop();
  });
  window.addEventListener("resize", () => {
    if (scene === 1) positionCard();
  });
  root.querySelectorAll(".cb-signal").forEach((el) => {
    for (let i = 0; i < 28; i++) {
      const bar = document.createElement("i");
      bar.style.height = 2 + Math.abs(Math.sin(i * 2.1)) * 12 + "px";
      bar.style.setProperty("--delay", -i * 0.11 + "s");
      el.append(bar);
    }
  });
  if (reduced.matches) typedElapsed = 10000;
  render();
})();
