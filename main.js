// document.getElementById('border').addEventListener('mouseenter', e => {
//     console.log(e)
// })

const ids = {
    borderLeft: 'border-left',
    borderRight: 'border-right',
    borderTop: 'border-top',
    borderBottom: 'border-bottom',
    resizable: 'resizable',
};

const setBorderVisible = () => {
    const allBorders = document.getElementsByClassName('border');
    Array.from(allBorders).forEach(b => {
        b.style.display = 'initial';
    })
};

const hideBorders = () => {
    const allBorders = document.getElementsByClassName('border');
    Array.from(allBorders).forEach(b => {
        b.style.display = 'none';
    })
}

const onVerticalBorderHover = (e) => {
    console.log(e);
};

const onResizableHover = e => {
    const {
        target,
        target: {
            id,
        }
    } = e;

    switch (id) {
        case ids.borderLeft:
            target.style.cursor = 'col-resize';
            break;
        case ids.borderRight:
            target.style.cursor = 'col-resize';
            break;
        case ids.borderTop:
            target.style.cursor = 'row-resize';
            break;
        case ids.borderBottom:
            target.style.cursor = 'row-resize';
            break;
        case ids.resizable:
            target.style.cursor = 'pointer';
            setBorderVisible();
            break;
        default:
            target.style.cursor = 'initial';
    }
}

const leftBorder = document.getElementById('border-left');
const rightBorder = document.getElementById('border-right');
const resizable = document.getElementById(ids.resizable);

resizable.addEventListener('mouseover', onResizableHover);
resizable.addEventListener('mouseleave', hideBorders);

// leftBorder.addEventListener('mouseenter', onVerticalBorderHover);
// rightBorder.addEventListener('mouseenter', onVerticalBorderHover);