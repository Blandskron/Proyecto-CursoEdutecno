
window.onload = function () {
    var chart = new CanvasJS.Chart("chartContainer", {
        theme: "light2",
        animationEnabled: true,
        title: {
            text: "Skill de Nuestros Desarrolladores"
        },
        axisY: {
            title: "Nivel de Habilidad"
        },
        axisX: {
            title: "Habilidades"
        },
        data: [{
            type: "stackedBar",
            name: "Desarrollador 1",
            showInLegend: true,
            dataPoints: [
                { y: 8, label: "HTML" },
                { y: 7, label: "CSS" },
                { y: 6, label: "JavaScript" },
                { y: 5, label: "Bootstrap" },
                { y: 4, label: "React" }
            ]
        },
        {
            type: "stackedBar",
            name: "Desarrollador 2",
            showInLegend: true,
            dataPoints: [
                { y: 6, label: "HTML" },
                { y: 8, label: "CSS" },
                { y: 7, label: "JavaScript" },
                { y: 6, label: "Bootstrap" },
                { y: 7, label: "Python" }
            ]
        },
        {
            type: "stackedBar",
            name: "Desarrollador 3",
            showInLegend: true,
            dataPoints: [
                { y: 6, label: "HTML" },
                { y: 8, label: "CSS" },
                { y: 7, label: "JavaScript" },
                { y: 6, label: "Bootstrap" },
                { y: 7, label: "Python" }
            ]
        },
        {
            type: "stackedBar",
            name: "Desarrollador 4",
            showInLegend: true,
            dataPoints: [
                { y: 6, label: "HTML" },
                { y: 8, label: "CSS" },
                { y: 7, label: "JavaScript" },
                { y: 6, label: "Bootstrap" },
                { y: 7, label: "Python" }
            ]
        },
        {
            type: "stackedBar",
            name: "Desarrollador 5",
            showInLegend: true,
            dataPoints: [
                { y: 5, label: "HTML" },
                { y: 6, label: "CSS" },
                { y: 8, label: "JavaScript" },
                { y: 7, label: "Bootstrap" },
                { y: 6, label: "Python" }
            ]
        }]
    });
    chart.render();
}