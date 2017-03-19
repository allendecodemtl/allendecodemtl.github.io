
var Accumulate = 0;
var FlagNewNum = false;
var PendingOp = "";
window.addEventListener("keydown", readKeyPress, false);

// Keyboard keypress
function readKeyPress(e) {
    switch(e.keyCode) {
        case 48:
          NumPressed(0);
          break;
        case 49:
          NumPressed(1);
          break;
        case 50:
          NumPressed(2);
          break;
        case 51:
          NumPressed(3);
          break;
        case 52:
          NumPressed(4);
          break;
        case 52:
          NumPressed(4);
          break;
        case 53:
          NumPressed(5);
          break;
        case 54:
          NumPressed(6);
          break;
        case 55:
          NumPressed(7);
          break;
        case 56:
          NumPressed(8);
          break;
        case 57:
          NumPressed(9);
          break;
        case 106:
          Operation('*');
          break;
        case 187:
          Operation('+');
          break;
        case 189:
          Operation('-');
          break;
        case 190:
          Decimal();
          break;
        case 191:
          Operation('/');
          break;
        case 13:
          Operation('=');
          e.preventDefault();
          break;
    }
}

function NumPressed (Num) {

    if (FlagNewNum) {
        document.Calculator.display.value = Num;
        FlagNewNum = false;
    }
    else {
        if (document.Calculator.display.value == "0")
            document.Calculator.display.value = Num;
        else
            document.Calculator.display.value += Num;
    }
}


function Operation (Op) {
    var Readout = document.Calculator.display.value;
    if (FlagNewNum && PendingOp != "=");
    else
    {
        FlagNewNum = true;

        if ( '+' == PendingOp )
            Accumulate += parseFloat(Readout);
        else if ( '-' == PendingOp )
            Accumulate -= parseFloat(Readout);
        else if ( '/' == PendingOp )
            Accumulate /= parseFloat(Readout);
        else if ( '*' == PendingOp )
            Accumulate *= parseFloat(Readout);
        else
            Accumulate = parseFloat(Readout);

        document.Calculator.display.value = Accumulate;
        PendingOp = Op;
    }
}

// dot functionality
function Decimal () {
    var curReadOut = document.Calculator.display.value;

    if (FlagNewNum) {
        curReadOut = "0.";
        FlagNewNum = false;
    }
    else
    {
        // dot not found
        if (curReadOut.indexOf(".") == -1)
            curReadOut += ".";
    }
    document.Calculator.display.value = curReadOut;
}

// Reset flags
function Clear () {
    Accumulate = 0;
    PendingOp = "";
    document.Calculator.display.value = "0";
    FlagNewNum = true;
}
