import { Description } from "@mui/icons-material";
import { describe } from "node:test";
import { title } from "process";
import { Arrow } from "../components/arrow";

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
  iconPath: String;
  progressPerc: Number;
  slides: Array<slide>;
};

// refers to a single slide when you open a tab.
type slide = {
  id: Number;
  title: String;
  description: String;
  tasks: Array<task> | null;
  progressPerc: Number;
  photoPath?: string ; // Optional photo path
};

type task = {
  id: Number;
  taskType: TaskType;
  taskObj: question | checkList | dateChoice;
};

export enum TaskType {
  Question,
  CheckList,
  SingleSelection,
  DateChoice,
  NoTask,
}

type NoTask ={
  text:string;
}

type question = {
  text: String;
  numOfAnswers: Number;
  possibleAnswers: Array<String>;
};

type SingleSelection = {
  text: String;
  options: Array<checkListOption>;
};

type checkList = {
  text: String;
  options: Array<checkListOption>;
};

type checkListOption = {
  id: Number;
  text: String;
  explanation: String;
  isMarked: Boolean;
};

type dateChoice = {
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
        iconPath: "/tabsIcons/icon1.svg",
        slides: [
          {
            id: 1,
            title: "מי יזם את עזיבת העבודה?",
            description:
              "במצב של סיום עבודה יש הבדל בזכויות המגיעות למי שפוטר מעבודתו ולמי שהתפטר. בשלב זה, נרצה לקבל את הפרטים הראשוניים בנוגע לשינוי הסטטוס התעסוקתי שלך.",
            photoPath: "app\arrows\BigArrow1.svg",
            tasks: [
              {
                id: 1,
                taskType: TaskType.Question,
                taskObj: {
                  text: "",
                  numOfAnswers: 2,
                  possibleAnswers: ["אני התפטרתי", "פיטרו אותי"],
                },
              },
            ],
            progressPerc: 0,
          },
          {
            id: 2,
            title: "מתי זה קרה?",
            description:
              "על מנת שנוכל להתאים את ההמלצות והשלבים המתאימים לשלב שבו אתה נמצא, נרצה להבין באיזה תאריך הגשת הודעת התפטרות.",
            tasks: [
              {
                id: 2,
                taskType: TaskType.DateChoice,
                taskObj: {
                  text: "תאריך התפטרות",
                },
              },
            ],
            progressPerc: 0,
          },
          {
            id: 3,
            title: "מתי ייסתימו ימי ההודעה המוקדמת",
            description:
              "אופן ההעסקה שלך בין אם עובד בשכר חודשי ובין אם עובד בשכר שעתי/יומי כמו גם כמות הזמן שבה עבדת במקום העבודה משפיעים על כמות הזמן שיש מרגע ההודעה על ההתפטרות ועד זמן סיום העבודה הממשי. ",
            tasks: [
              {
                id: 3,
                taskType: TaskType.SingleSelection,
                taskObj: {
                  text: "סוג שכר",
                  options: [
                    {
                      id: 1,
                      text: "חודשי",
                      explanation: "",
                      isMarked: false,
                    },
                    {
                      id: 2,
                      text: "שעתי",
                      explanation: "",
                      isMarked: false,
                    },
                  ],
                },
              },
              {
                id: 4,
                taskType: TaskType.DateChoice,
                taskObj: {
                  text: "תאריך תחילת עבודה",
                },
              },
            ],
            progressPerc: 0,
          },
        ],
      },
      {
        id: 2,
        progressPerc: 0,
        name: "מסמכים",
        iconPath: "/tabsIcons/icon2.svg",
        slides: [
          {
            id: 1,
            title: "מסמכים שאתה צריך לקבל",
            description: "",
            tasks: [
              {
                id: 1,
                taskType: TaskType.CheckList,
                taskObj: {
                  text: "",
                  options: [
                    {
                      id: 1,
                      text: "מכתב סיום העסקה",
                      explanation:
                        "המעסיק צריך לתת לעובד הודעה כתובה על סיום ההעסקה, אשר מפרטת את התקופה שבה הועסק העובד אצל המעסיק.",
                      isMarked: false,
                    },
                    {
                      id: 2,
                      text: "שחרור כספים",
                      explanation: "הסבר כלשהו על הסעיף",
                      isMarked: false,
                    },
                    {
                      id: 3,
                      text: "טופס 106",
                      explanation: "הסבר כלשהו על הסעיף",
                      isMarked: false,
                    },
                    {
                      id: 4,
                      text: "טופס 161",
                      explanation: "הסבר כלשהו על הסעיף",
                      isMarked: false,
                    },
                  ],
                },
              },
            ],
            progressPerc: 0,
          },
          {
            id: 2,
            title: "תשלומים שאתה חייב לקבל",
            description: "",
            tasks: [
              {
                id: 1,
                taskType: TaskType.CheckList,
                taskObj: {
                  text: "",
                  options: [
                    {
                      id: 1,
                      text: "שכר אחרון",
                      explanation:
                        "המעסיק צריך לתת לעובד הודעה כתובה על סיום ההעסקה, אשר מפרטת את התקופה שבה הועסק העובד אצל המעסיק.",
                      isMarked: false,
                    },
                    {
                      id: 2,
                      text: "ימי חופשה",
                      explanation: "הסבר כלשהו על הסעיף",
                      isMarked: false,
                    },
                    {
                      id: 3,
                      text: "ימי הבראה",
                      explanation: "הסבר כלשהו על הסעיף",
                      isMarked: false,
                    },
                    {
                      id: 4,
                      text: "מענק פרישה",
                      explanation: "הסבר כלשהו על הסעיף",
                      isMarked: false,
                    },
                  ],
                },
              },
            ],
            progressPerc: 0,
          },
        ],
      },
      {
        id: 3,
        progressPerc: 0,
        name: "בדיקת זכאות",
        iconPath: "/tabsIcons/icon3.svg",
        slides: [
          {
            id: 1,
            title: "קודם נבדוק האם מגיעים לך דמי לאבטלה",
            description:
              "על מנת לקבל דמי אבטלה עלייך לענות על מספר תנאים. מילוי השאלון יעזור להבין האם אתה עומד בקריטריונים לקבלת דמי אבטלה ומתי אתה יכול להתחיל לקבל דמי אבטלה.",
            tasks: null,
            progressPerc: 0,
          },
          {
            id: 2,
            title: "אתה בן 20-67?",
            description: "",
            tasks: [
              {
                id: 1,
                taskType: TaskType.Question,
                taskObj: {
                  text: "",
                  numOfAnswers: 2,
                  possibleAnswers: ["כן", "לא"],
                },
              },
            ],
            progressPerc: 0,
          },
          {
            id: 3,
            title: "אתה תושב ישראל?",
            description: "",
            tasks: [
              {
                id: 1,
                taskType: TaskType.Question,
                taskObj: {
                  text: "",
                  numOfAnswers: 2,
                  possibleAnswers: ["כן", "לא"],
                },
              },
            ],
            progressPerc: 0,
          },
          {
            id: 4,
            title: "אתה עצמאי?",
            description: "",
            tasks: [
              {
                id: 1,
                taskType: TaskType.Question,
                taskObj: {
                  text: "",
                  numOfAnswers: 2,
                  possibleAnswers: ["כן", "לא"],
                },
              },
            ],
            progressPerc: 0,
          },
          {
            id: 5,
            title: "המעסיק שלך אינו תושב ישראל/הינך עובד של שירות מדינה אחרת?",
            description: "",
            tasks: [
              {
                id: 1,
                taskType: TaskType.Question,
                taskObj: {
                  text: "",
                  numOfAnswers: 2,
                  possibleAnswers: ["כן", "לא"],
                },
              },
            ],
            progressPerc: 0,
          },
          {
            id: 6,
            title: "האם ב-18 החודשים שקדמו  לאבטלה עבדת במשך שנה?",
            description: "",
            tasks: [
              {
                id: 1,
                taskType: TaskType.Question,
                taskObj: {
                  text: "",
                  numOfAnswers: 2,
                  possibleAnswers: ["כן", "לא"],
                },
              },
              
            ],
            progressPerc: 0,
          },
          {
            id: 7,
            title: "זכית! איזה כיף אתה זכאי לדמי אבטלה",
            description: "",
            tasks: null,
            progressPerc: 0,
          },
        ],
      },
      {
        id: 4,
        progressPerc: 0,
        name: "הרשמה ללשכה",
        iconPath: "/tabsIcons/icon4.svg",
        slides: [
          {
            id: 1,
            title: "איך תירשם לאבטלה?",
            description:
              "על מנת להתחיל בתביעה של דמי אבטלה צריך להרשם לאתר לשכת התעסוקה. ניתן לבצע את הרישום בהגעה פיזית ללשכה וניתן לקצר את התהליך באמצעות רישום מקוון. חישוב דמי האבטלה יחל רטרואקטיבית ממועד הרישום הראשוני באתר.",
            tasks: [
              {
                id: 1,
                taskType: TaskType.Question,
                taskObj: {
                  text: "",
                  numOfAnswers: 2,
                  possibleAnswers: ["רישום מקוון", "הגעה פיזית ללשכה"],
                },
              },
            ],
            progressPerc: 0,
          },
        ],
      },
      {
        id: 5,
        progressPerc: 0,
        name: "בדיקת זכאות",
        iconPath: "/tabsIcons/icon5.svg",
        slides: [
          {
            id: 1,
            title: "רשימת מסמכים שאתה צריך לקבל מהבוס",
            description: "",
            tasks: null,
            progressPerc: 0,
          },
        ],
      },
    ],
  },
];
