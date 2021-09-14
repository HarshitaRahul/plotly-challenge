d3.json("samples.json").then(data =>{
    console.log(data);
    let selected_id = 940;
    let metadata = data.metadata.filter(subject = > subject.id == selected_id);

    // Demographic Info
    meta_div = d3.select("#sample-metadata")
    Object.entries(metadata).forEach(([key,value]) => {
    meta_div.append("p").html(`<strong>${key. toUpperCase()}:</strong> ${value}`);

    
})