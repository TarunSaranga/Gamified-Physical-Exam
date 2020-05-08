var timer;

document.addEventListener("DOMContentLoaded", function() {
    var sec = 0;
    var ss, mm, hh;
    var time;

    timer = setInterval(updateTimer, 1000)

    function updateTimer() {
        sec++;

        if (sec%60 < 10) {
            ss = "0"+sec%60;
        } else {
            ss = sec%60;
        }

        mm = Math.floor(sec/60);

        time = mm+":"+ss;

        document.getElementById("timer").innerHTML = time;
    }
})

function layerchange() {
    const layer = document.getElementById("slider");
    const filename = "https://apps.hdap.gatech.edu/gamified-physical-examination/bodies/body_" + layer.value + ".png";
    document.getElementById("human").src = filename;
}

function endGame() {
    fire_ajax_submit();
}

function fire_ajax_submit() {
    let exams = [];
    let index = 0;
    $('#exam_list tr').each(function() {
        if (index > 0) {
            let exam_name = $(this).find(".exam_name").html();
            let exam_measurement = $(this).find(".exam_measurement").html();
            let exam_duration = $(this).find(".exam_duration").html();
            let exam = {
                caseName:exam_name,
                caseMeasurement:exam_measurement,
                duration:exam_duration
            };
            exams.push(exam);
        }
        index++;
    });

    $.ajax({
        type: "POST",
        contentType: "application/json",
        url: "/api/fhir",
        data: JSON.stringify(exams),
        dataType: 'json',
        cache: false,
        timeout: 600000,
    })
}

var exams = {
    "system": [
        {
            "id": 1,
            "name": "Vital Signs",
            "duration": 15,
            "exams": [
                {
                    "id": 0,
                    "code": "8310-5",
                    "name": "Temperature",
                    "unit": "C/F"
                },
                {
                    "id": 1,
                    "code": "8867-4",
                    "name": "Pulse Rate",
                    "unit": "bpm"
                },
                {
                    "id": 2,
                    "code": "89268-7",
                    "name": "Blood pressure systolic (Lying L arm)",
                    "unit": "mmHg"
                },
                {
                    "id": 3,
                    "code": "89267-9",
                    "name": "Blood pressure diastolic (Lying L arm)",
                    "unit": "mmHg"
                },
                {
                    "id": 4,
                    "code": "8547-2",
                    "name": "Blood pressure systolic (Lying R arm)",
                    "unit": "mmHg"
                },
                {
                    "id": 5,
                    "code": "8515-9",
                    "name": "Blood pressure diastolic (Lying R arm)",
                    "unit": "mmHg"
                },
                {
                    "id": 6,
                    "code": "8460-8",
                    "name": "Standing systolic (L arm)",
                    "unit": "mmHg"
                },
                {
                    "id": 7,
                    "code": "8454-1",
                    "name": "Standing distolic (L arm)",
                    "unit": "mmHg"
                },
                {
                    "id": 8,
                    "code": "8459-0",
                    "name": "Sitting systolic (L arm)",
                    "unit": "mmHg"
                },
                {
                    "id": 9,
                    "code": "8453-3",
                    "name": "Sitting distolic (L arm)",
                    "unit": "mmHg"
                },
                {
                    "id": 10,
                    "code": "9279-1",
                    "name": "Respiratory rate",
                    "unit": "breaths per minute"
                },
                {
                    "id": 11,
                    "code": "50556-0",
                    "name": "Urinalysis",
                    "unit": ""
                }
            ]
        },
        {
            "id": 2,
            "name": "Cardiovascular",
            "duration": 15,
            "exams": [
                {
                    "id": 0,
                    "code": "8911-0",
                    "name": "Radial pulse right",
                    "unit": ""
                },
                {
                    "id": 1,
                    "code": "8910-2",
                    "name": "Radial pulse left",
                    "unit": ""
                },
                {
                    "id": 2,
                    "code": "8594-4",
                    "name": "Neck",
                    "unit": ""
                },
                {
                    "id": 3,
                    "code": "8901-1",
                    "name": "Carotid: Right palpate",
                    "unit": ""
                },
                {
                    "id": 4,
                    "code": "8900-3",
                    "name": "Carotid: Left palpate",
                    "unit": ""
                },
                {
                    "id": 5,
                    "code": "SNOMED 419642000",
                    "name": "Carotid: Auscultate for bruits",
                    "unit": ""
                },
                {
                    "id": 6,
                    "code": "8891-4",
                    "name": "Chest",
                    "unit": ""
                },
                {
                    "id": 7,
                    "code": "80276-9",
                    "name": "Two heart sounds (S1, S2)",
                    "unit": ""
                },
                {
                    "id": 8,
                    "code": "80278-5",
                    "name": "Murmus (systolic, diastolic)",
                    "unit": ""
                },
                {
                    "id": 9,
                    "code": "80271-0",
                    "name": "Palpate",
                    "unit": ""
                },
                {
                    "id": 10,
                    "code": "32448-3",
                    "name": "Lower limbs",
                    "unit": ""
                },
                {
                    "id": 11,
                    "code": "8904-5",
                    "name": "Pulse: femoral L",
                    "unit": ""
                },
                {
                    "id": 12,
                    "code": "8905-2",
                    "name": "Pulse: femoral R",
                    "unit": ""
                },
                {
                    "id": 13,
                    "code": "8902-9",
                    "name": "Pulse: dorsalis pedis L",
                    "unit": ""
                },
                {
                    "id": 14,
                    "code": "74782-4",
                    "name": "Pulse: dorsalis pedis R",
                    "unit": ""
                },
                {
                    "id": 15,
                    "code": "8906-0",
                    "name": "Pulse: popliteal L",
                    "unit": ""
                },
                {
                    "id": 16,
                    "code": "8907-8",
                    "name": "Pulse: popliteal R",
                    "unit": ""
                },
                {
                    "id": 17,
                    "code": "8909-4",
                    "name": "Pulse: posterior tibial L",
                    "unit": ""
                },
                {
                    "id": 18,
                    "code": "8908-6",
                    "name": "Pulse: posterior tibial R",
                    "unit": ""
                }
            ]
        },
        {
            "id": 3,
            "name": "Eyes",
            "duration": 18,
            "exams": [
                {
                    "id": 0,
                    "code": "SCTID 164734008",
                    "name": "Fundoscopy Normal",
                    "unit": ""
                }
            ]
        },
        {
            "id": 4,
            "name": "Body",
            "duration": 5,
            "exams": [
                {
                    "id": 0,
                    "code": "8302-2",
                    "name": "Height",
                    "unit": "cm"
                },
                {
                    "id": 1,
                    "code": "29463-7",
                    "name": "Weight",
                    "unit": "kg"
                }
            ]
        }
    ]
};

function changeSystem() {
    var system = document.getElementById("input_system").value;
    var examList = exams.system[system].exams;

    $("#input_exam").empty();
    examList.forEach(appendOption);

    function appendOption(item, i) {
        if (selectedCode[item.code] == null) {
            $("#input_exam").append("<option value='"+item.id+"'>"+item.name+"</option>");
        }
    }
}

function deleteRow(btn) {
    const row = btn.parentNode.parentNode;
    const examCode = row.childNodes[1].innerHTML;
    console.log(examCode);
    delete selectedCode[examCode];
    console.log(selectedCode);
    row.parentNode.removeChild(row);
}

var correctAnswer = ["89268-7", "89267-9", "8547-2", "8515-9", "8460-8", "8454-1", "8459-0", "8453-3", "8911-0", "8910-2", "8901-1", "8900-3", "8904-5", "8905-2", "8902-9", "74782-4", "8906-0", "8907-8", "8909-4", "8908-6", "SCTID 164734008"];
var selected = [];
var selectedCode = {};
var field_score = 0;
var field_duration = 0;

$( function() {
    var popup, form, pos;

    function addExam() {
        var sel_system = $("#input_system").val();
        var sel_exam = $("#input_exam").val();

        if (sel_system == "NA") {
            alert("Please select a system!");
            return;
        } else if (sel_exam == null) {
            alert("Please select an exam!");
            return;
        }

        var examItem = exams.system[sel_system].exams[sel_exam];

        if (!selected.includes(sel_system)) {
            selected.push(sel_system);
            field_duration += exams.system[sel_system].duration;
        }
        // let unit = $("#input_result").val();
        // if (unit != examItem.unit) {
        //     alert("The unit you entered does not match with the exam unit");
        //     alert("To allow the demo go smoothly. We will show the exam code, "
        //         + "and we will remove this hint when demo is done. "
        //         + "The exam code should be : " + JSON.stringify(examItem.unit));
        //     popup.dialog( "close" );
        // } else
        if (selectedCode[examItem.code] != null) {
            alert("Exam already selected!");
            popup.dialog( "close" );
        } else {
            selectedCode[examItem.code] = examItem;
            $( "#exam_list tbody" ).append( "<tr>" +
            "<td class='exam_name'>" + examItem.name + "</td>" +
            "<td class='exam_code'>" + examItem.code + "</td>" +
            "<td class='exam_measurement'>" + $("#input_result").val() + "</td>" +
            "<td class='exam_duration'>" + examItem.unit + "</td>" +
            "<td><input type='button' value='X' onclick='deleteRow(this)'></td>" +
            "</tr>" );
            console.log(selectedCode);
            popup.dialog( "close" );
        }
    }

    popup = $( "#popup" ).dialog({
        autoOpen: false,
        modal: true,
        close: function() {
            form[ 0 ].reset();
        }
    });

    form = popup.find( "form" ).on( "submit", function(e) {
        e.preventDefault();
        addExam();
        $("#input_exam").empty();
    });

    $( "#human" ).on( "click", function(e) {
        pos = {
            my: "center",
            at: "center",
            of: e
        }

        popup.dialog("option", "position", pos).dialog( "open" );
    });

    $( "#popupclose" ).on("click", function() {
        popup.dialog("close");
    });
} );

$(function() {
    var popup;

    popup = $("#submit_popup").dialog({
        autoOpen: false,
        modal: true
    });

    $("#submit_btn").click(function() {
        if (jQuery.isEmptyObject(selectedCode)) {
            alert("Please select at least an exam!");
            return;
        }

        var finalScore = 0;

        correctAnswer.forEach(checkAnswer);

        function checkAnswer(item, i) {
            if (selectedCode[item.code]) {
                finalScore++;
            }
        }

        $("#field_score").append(finalScore+"/"+correctAnswer.length);
        $("#field_duration").append(field_duration);

        pos = {
            my: "center",
            at: "center",
            of: $("body")
        }

        clearInterval(timer);
        $(".overlay").css("display", "block");
        popup.dialog("option", "position", pos).dialog( "open" );
    });
});
