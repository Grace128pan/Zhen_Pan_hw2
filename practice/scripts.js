function search() {
    var input = document.getElementById("searchInput").value.toLowerCase();
    var catInfo = "Your cat-related information here."; // Replace with your cat-related information

    if (catInfo.toLowerCase().includes(input)) {
        document.getElementById("searchResult").innerHTML = catInfo;
    } else {
        document.getElementById("searchResult").innerHTML = "No information found.";
    }
}
