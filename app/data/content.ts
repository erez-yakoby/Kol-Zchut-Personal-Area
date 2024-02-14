//refers to the main process e.g getting fired.
type process = {
  id: Number;
  name: String;
  progressPerc: Number;
  tabs: Array<tab>;
};

// refers to the tabs in the process (sub-processes) e.g getting the documents, דמי אבטלה
type tab = {
  id: Number;
  name: String;
  progressPerc: Number;
  slides: Array<slide>;
};

// refers to a single slide when you open a tab.
type slide = {
  id: Number;
  title: String;
  description: String;
  task: question | checkList | dateChoice | null;
  taskType: TaskType;
  progressPerc: Number;
};

export enum TaskType {
  Question,
  CheckList,
  DateChoice,
  NoTask,
}

type question = {
  id: Number;
  text: String;
  numOfAnswers: Number;
  possibleAnswers: Array<String>;
};

type checkList = {
  id: Number;
  text: String;
  options: Array<checkListOption>;
};

type checkListOption = {
  id: Number;
  text: String;
  isMarked: Boolean;
};

type dateChoice = {
  id: Number;
  text: String;
};

export const ProcessesContent: Array<process> = [
  {
    id: 1,
    name: "פיטורים",
    progressPerc: 0,
    tabs: [
      {
        id: 1,
        progressPerc: 0,
        name: "צעדים ראשונים",
        slides: [
          {
            id: 1,
            title: "תכל'ס נעזור לך לקבל כל מה שמגיע לך",
            description:
              "זהו תחילת התהליך של מימוש הזכויות שלך בנושא סיום עבודה. התהליך מורכב ממספר שלבים ומשימות שנועדו לדאוג ללוות אותך שלב אחרי שלב ושבסופם  תקבל את כל מה שמגיע לך",
            task: null,
            taskType: TaskType.NoTask,
            progressPerc: 0,
          },
          {
            id: 2,
            title: "מה קרה לך בעצם?",
            description:
              "במצב של סיום עבודה יש הבדל בזכויות המגיעות למי שפוטר מעבודתו ולמי שהתפטר. בשלב זה, נרצה לקבל את הפרטים הראשוניים בנוגע לשינוי הסטטוס התעסוקתי שלך.",
            task: {
              id: 1,
              text: "",
              numOfAnswers: 2,
              possibleAnswers: ["פיטרו אותי", "אני התפטרתי"],
            },
            taskType: TaskType.Question,
            progressPerc: 0,
          },
          {
            id: 3,
            title: "מתי זה קרה?",
            description:
              "על מנת שנוכל להתאים את ההמלצות והשלבים המתאימים לשלב שבו אתה נמצא, נרצה להבין באיזה תאריך התרחש השינוי התעסוקתי. ",
            task: { id: 1, text: "" },
            taskType: TaskType.DateChoice,
            progressPerc: 0,
          },
        ],
      },
      {
        id: 2,
        progressPerc: 0,
        name: "מסמכים",
        slides: [
          {
            id: 1,
            title: "רשימת מסמכים שאתה צריך לקבל מהבוס",
            description: "",
            task: {
              id: 1,
              text: "",
              options: [
                { id: 1, text: "מכתב סיום העסקה", isMarked: false },
                { id: 2, text: "שחרור כספים", isMarked: false },
                { id: 3, text: "טופס 161", isMarked: false },
              ],
            },
            taskType: TaskType.CheckList,
            progressPerc: 0,
          },
        ],
      },
    ],
  },
];
