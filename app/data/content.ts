import { Description } from "@mui/icons-material";
import { describe } from "node:test";
import { title } from "process";
// import { Arrow } from "../components/arrow";

//refers to the main process e.g getting fired.
type process = {
  id: Number;
  name: String;
  progressPerc: Number;
  tabs: Array<tab>;
};

type finishingSlide = {
  title: String;
  arrowAnimationType: String;
  description?: String;
};
// refers to the tabs in the process (sub-processes) e.g getting the documents, דמי אבטלה
type tab = {
  id: Number;
  name: String;
  iconPath: String;
  progressPerc: Number;
  slides: Array<slide>;
  finishingSlide?: finishingSlide;
};

// refers to a single slide when you open a tab.
type slide = {
  id: Number;
  title: String;
  description: String;
  tasks: Array<task> | null;
  progressPerc: Number;
  photo?: string; // Optional photo path
};

type task = {
  id: Number;
  taskType: TaskType;
  taskObj: question | checkList | dateChoice | textFiller;
  isFinished: boolean;
};

export enum TaskType {
  Question,
  CheckList,
  SingleSelection,
  DateChoice,
  TextFiller,
  NoTask,
}

type NoTask = {
  text: string;
};

type question = {
  text: String;
  numOfAnswers: Number;
  possibleAnswers: Array<String>;
  selectedAnswer: Number | null;
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
  checklistphoto?: string;
};

type dateChoice = {
  text: String;
};

type textFiller = {
  text: String;
  filling: String;
};

export const ProcessesContent: Array<process> = [
  {
    id: 1,
    name: "פיטורים",
    progressPerc: 0,
    tabs: [
      {
        id: 0,
        progressPerc: 0,
        name: "זכותך לדעת, זכותך לממש",
        iconPath: "",
        slides: [
          {
            id: 1,
            title: "פיטורים?\nתקבל את מה שמגיע לך",
            description:
              "ברוכים הבאים ״לזכותך״ העוזר האישי שלך למימוש הזכויות. על מנת שתוכל לממש את זכויותך בנושא פיטורים בצורה הטובה ביותר יש לעקוב אחר השלבים הבאים.",
            photo: "LoopArrow",
            tasks: [
              {
                id: 1,
                taskType: TaskType.Question,
                taskObj: {
                  text: "",
                  numOfAnswers: 2,
                  possibleAnswers: ["יאללה התחלתי", "המשך תהליך קיים"],
                  selectedAnswer: null,
                },
                isFinished: false,
              },
            ],
            progressPerc: 0,
          },
          {
            id: 2,
            title: "רגע לפני שנתחיל, איך לפנות אלייך?",
            description: "",
            photo: "",
            tasks: [
              {
                id: 2,
                taskType: TaskType.Question,
                taskObj: {
                  text: "",
                  numOfAnswers: 2,
                  possibleAnswers: ["נקבה", "זכר"],
                  selectedAnswer: null,
                },
                isFinished: false,
              },
            ],
            progressPerc: 0,
          },
        ],
      },
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
            photo: "LoopArrow",
            tasks: [
              {
                id: 1,
                taskType: TaskType.Question,
                taskObj: {
                  text: "",
                  numOfAnswers: 2,
                  possibleAnswers: ["אני התפטרתי", "פיטרו אותי"],
                  selectedAnswer: null,
                },
                isFinished: false,
              },
            ],
            progressPerc: 0,
          },
          {
            id: 2,
            title: "מתי זה קרה?",
            description:
              "על מנת שנוכל להתאים את ההמלצות והשלבים המתאימים לשלב שבו אתה נמצא, נרצה להבין באיזה תאריך הגשת הודעת התפטרות.",
            photo: "Arrow1",
            tasks: [
              {
                id: 2,
                taskType: TaskType.DateChoice,
                taskObj: {
                  text: "תאריך התפטרות",
                },
                isFinished: false,
              },
            ],
            progressPerc: 0,
          },
          {
            id: 3,
            title: "ימי הודעה\nמוקדמת שנותרו",
            description:
              "אופן ההעסקה שלך בין אם עובד בשכר חודשי ובין אם עובד בשכר שעתי/יומי כמו גם כמות הזמן שבה עבדת במקום העבודה משפיעים על כמות הזמן שיש מרגע ההודעה על ההתפטרות ועד זמן סיום העבודה הממשי. ",
            tasks: [
              {
                id: 3,
                taskType: TaskType.SingleSelection,
                taskObj: {
                  text: "בחר מהו סוג השכר שלך",
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
                isFinished: false,
              },
              {
                id: 4,
                taskType: TaskType.DateChoice,
                taskObj: {
                  text: "הזן את תאריך תחילת העבודה",
                },
                isFinished: false,
              },
              {
                id: 5,
                taskType: TaskType.TextFiller,
                taskObj: {
                  text: "ימי הודעה מוקדמת שנותרו:",
                  filling: "36",
                },
                isFinished: false,
              },
            ],
            progressPerc: 0,
          },
        ],
        finishingSlide: {
          title: "סיימת את השלב הראשון! ואנחנו מכירים קצת יותר",
          arrowAnimationType: "arrow1",
        },
      },
      {
        id: 2,
        progressPerc: 0,
        name: "סגירת חשבון",
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
                      explanation:
                        "מסמך המפרט את כספי הפיצויים ששולמו לעובד עקב סיום עבודתו. מהווה בסיס למתן פטור ממס הכנסה על פיצויי הפיטורים או לקביעת אחוז ניקוי מס הכנסה מהם.",
                      isMarked: false,
                    },
                    {
                      id: 3,
                      text: "טופס 106",
                      explanation:
                        "טופס המרכז ומפרט את כל התשלומים והניכויים שנוכו משכרו של העובד במהלך כל השנה (מינואר עד דצמבר).",
                      isMarked: false,
                    },
                    {
                      id: 4,
                      text: "טופס 161",
                      explanation:
                        "הודעת מעביד לרשות המיסים על פרישה מעבודה של עובד. מפרט את כספי הפיצויים וכספים נוספים ששולמו עקב סיום עבודה ואת הכספים שהופרשו לביטוח הפנסיוני.",
                      isMarked: false,
                    },
                  ],
                },
                isFinished: false,
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
                        "שכר מלא על תקופת ההודעה המוקדמת. שים לב אם עבדת בתקופה זו השכר כולל תנאים סוציאליים ואם לא עבדת השכר יתנן ללא תנאים סוציאליים.",
                      isMarked: false,
                      checklistphoto: "LastSalary",
                    },
                    {
                      id: 2,
                      text: "ימי חופשה",
                      explanation:
                        "תשלום על ימי החופשה שנותרו לך. ניתן לבקש לנצל גם כימי חופשה בתקופת ההודעה המוקדמת באישור המעסיק.",
                      isMarked: false,
                      checklistphoto: "VacationDays",
                    },
                    {
                      id: 3,
                      text: "ימי הבראה",
                      explanation:
                        "אם התפטרת אחרי יותר משנת עבודה, אתה זכאי לקבל את דמי ההבראה שנצברו לזכותך.",
                      isMarked: false,
                      checklistphoto: "IncomeTax",
                    },
                    {
                      id: 4,
                      text: "מענק פרישה",
                      explanation:
                        "סכום אותו המעסיק נותן בתום תקופת העבודה. הסכום שתקבל תלוי בהסכם העבודה שלך.",
                      isMarked: false,
                      checklistphoto: "IncomeTax",
                    },
                  ],
                },
                isFinished: false,
              },
            ],
            progressPerc: 0,
          },
        ],
        finishingSlide: {
          title: "התקדמת צעד נוסף אל היעד!",
          arrowAnimationType: "arrow2",
        },
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
            photo: "Arrow1",
            tasks: [
              {
                id: 1,
                taskType: TaskType.Question,
                taskObj: {
                  text: "",
                  numOfAnswers: 2,
                  possibleAnswers: ["כן", "לא"],
                  selectedAnswer: null,
                },
                isFinished: false,
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
                  selectedAnswer: null,
                },
                isFinished: false,
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
                  selectedAnswer: null,
                },
                isFinished: false,
              },
            ],
            progressPerc: 0,
          },
          {
            id: 5,
            title: "המעסיק שלך אינו תושב ישראל/אתה עובד בשירות מדינה אחרת?",
            description: "",
            tasks: [
              {
                id: 1,
                taskType: TaskType.Question,
                taskObj: {
                  text: "",
                  numOfAnswers: 2,
                  possibleAnswers: ["כן", "לא"],
                  selectedAnswer: null,
                },
                isFinished: false,
              },
            ],
            progressPerc: 0,
          },
          {
            id: 6,
            title: "האם ב-18 החודשים שקדמו  לאבטלה עבדת במשך שנה?",
            description: "",
            photo: "LittleArrowText",
            tasks: [
              {
                id: 1,
                taskType: TaskType.Question,
                taskObj: {
                  text: "",
                  numOfAnswers: 2,
                  possibleAnswers: ["כן", "לא"],
                  selectedAnswer: null,
                },
                isFinished: false,
              },
            ],
            progressPerc: 0,
          },
          {
            id: 7,
            title: "אתה זכאי לדמי אבטלה",
            description: "",
            tasks: null,
            progressPerc: 0,
          },
        ],
        finishingSlide: {
          title: "שלב נוסף מאחורייך! אנחנו קרובים לסוף",
          arrowAnimationType: "arrow3",
        },
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
            photo: "ArrowID",
            tasks: [
              {
                id: 1,
                taskType: TaskType.Question,
                taskObj: {
                  text: "",
                  numOfAnswers: 2,
                  possibleAnswers: ["רישום מקוון", "הגעה פיזית ללשכה"],
                  selectedAnswer: null,
                },
                isFinished: false,
              },
            ],
            progressPerc: 0,
          },
          {
            id: 2,
            title: "כיצד לבצע הרשמה מקוונת",
            description:
              "1.  כנס לאתר שירות התעסוקה ובצע רישום לאתר\n2.  בתיבת המייל תמצא מייל אימות, לחץ על הקישור לצורך סיום הרשמה\n3.  כנס חזרה לאתר שירות התעסוקה באמצעות פרטי המשתמש\n4.  לחץ ״אזור אישי״, ״רישום ראשוני ללשכה״ והזן את הפרטים\n5.  היכנס לאתר ביטוח לאומי והגש בקשה לתביעה",
            tasks: null,
            progressPerc: 0,
          },
          {
            id: 3,
            title: "הגעה ראשונה ללשכה",
            description:
              "להשלמת הרישום יש להגיע ללשכת התעסוקה בתווך זמן של 14 ימים קלנדריים מתאריך הרישום באתר.",
            tasks: [
              {
                id: 1,
                taskType: TaskType.TextFiller,
                taskObj: {
                  text: "עלייך להגיע ללשכה עד לתאריך:",
                  filling: "22.03.2024",
                },
                isFinished: false,
              },
            ],
            progressPerc: 0,
          },
        ],
        finishingSlide: {
          title: "רק עוד שלב אחד וסיימת!",
          arrowAnimationType: "arrow4",
        },
      },
      {
        id: 5,
        progressPerc: 0,
        name: "התייצבות בלשכה",
        iconPath: "/tabsIcons/icon5.svg",
        slides: [
          {
            id: 1,
            title: "כמה זמן אבטלה מגיע לך",
            description:
              "כמות ימי האבטלה שאתה זכאי להם מושפעת משני פרמטרים: גיל ומספר בני משפחה אשר תלויים בך (בת/בת זוג, ילדים מתחת לגיל 18).",
            tasks: [
              {
                id: 3,
                taskType: TaskType.SingleSelection,
                taskObj: {
                  text: "מה הגיל שלך?",
                  options: [
                    {
                      id: 1,
                      text: "מתחת ל-25",
                      explanation: "",
                      isMarked: false,
                    },
                    {
                      id: 2,
                      text: "25-28",
                      explanation: "",
                      isMarked: false,
                    },
                    {
                      id: 3,
                      text: "35-45",
                      explanation: "",
                      isMarked: false,
                    },
                    {
                      id: 4,
                      text: "45 ומעלה",
                      explanation: "",
                      isMarked: false,
                    },
                  ],
                },
                isFinished: false,
              },
              {
                id: 3,
                taskType: TaskType.SingleSelection,
                taskObj: {
                  text: "כמה בני משפחה תלויים בך?",
                  options: [
                    {
                      id: 1,
                      text: "פחות מ-3",
                      explanation: "",
                      isMarked: false,
                    },
                    {
                      id: 2,
                      text: "3 ומעלה",
                      explanation: "",
                      isMarked: false,
                    },
                  ],
                },
                isFinished: false,
              },
              {
                id: 3,
                taskType: TaskType.TextFiller,
                taskObj: {
                  text: "ימי אבטלה שאתה זכאי להם:",
                  filling: "20",
                },
                isFinished: false,
              },
            ],
            progressPerc: 0,
          },
          {
            id: 2,
            title: "מתי תצטרך להגיע ללשכה?",
            description:
              "במסגרת חתימה על דמי אבטלה נדרש להגיע מידי שבוע ללשכת התעסוקה ולהתייצב בעמדות ההחתמה. ההגעה ללשכה צריכה להתבצע ביום קבוע מידי שבוע לאורך תקופת דמי האבטלה שאתה זכאי לה. אנשים מעל גיל 50, נדרשים להגיע פעם בחודש.",
            photo: "LoopArrow",
            tasks: [
              {
                id: 3,
                taskType: TaskType.SingleSelection,
                taskObj: {
                  text: "בחר את יום ההגעה הקבוע שלך ללשכה",
                  options: [
                    {
                      id: 1,
                      text: "ראשון",
                      explanation: "",
                      isMarked: false,
                    },
                    {
                      id: 2,
                      text: "שני",
                      explanation: "",
                      isMarked: false,
                    },
                    {
                      id: 3,
                      text: "שלישי",
                      explanation: "",
                      isMarked: false,
                    },
                    {
                      id: 4,
                      text: "רביעי",
                      explanation: "",
                      isMarked: false,
                    },
                    {
                      id: 5,
                      text: "חמישי",
                      explanation: "",
                      isMarked: false,
                    },
                  ],
                },
                isFinished: false,
              },
            ],
            progressPerc: 0,
          },
        ],
        finishingSlide: {
          title: "סיימת את כל השלבים במדריך לפיטורים",
          // arrowAnimationType: "arrow5",
          description:
            "איך ממשיכים מפה? הנה כמה מדריכים שיכולים לעניין אותך\n המדריך לחיפוש עבודה וניהול קריירה\n המדריך להחזרי מס\n המדריך לפנסיה וחיסכון לטווח ארוך",
          arrowAnimationType: "",
        },
      },
    ],
  },
];
