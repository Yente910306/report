function calculate() {
  // Get factors' values
  const factors = [];
  for (let i = 1; i <= 7; i++) {
    factors.push(parseFloat(document.getElementById(`factor${i}`).value));
  }

  // Original scores for each region
  const regions = [
    { name: "北區", individuals: ["中原大學", "淡江大學", "輔仁大學", "實踐大學", "桃園銘傳大學", "元智大學", "中華大學", "東吳大學", "文化大學"] },
    { name: "中區", individuals: ["逢甲大學", "大葉大學", "東海大學", "靜宜大學", "暨南大學", "彰化師範大學"] },
    { name: "南區", individuals: ["長榮大學", "義守大學", "南華大學", "嘉義大學", "中正大學", "中山大學", "高雄大學", "屏東大學", "台南大學", "成功大學", "高雄師範大學"] },
    { name: "東區", individuals: ["台東大學", "佛光大學", "宜蘭大學", "東華大學"] }
  ];

  // Entrance threshold scores
  const entranceThresholdScores = [4, 4, 3, 3, 4, 1, 4, 2, 4, 1, 4, 3, 4, 5, 2, 1, 3, 4, 4, 5, 4, 4, 4, 5, 4, 4, 2, 4, 5];

  // Teacher quality scores
  const teacherQualityScores = [4, 5, 3, 1, 2, 5, 2, 3, 3, 5, 2, 2, 3, 4, 4, 4, 3, 3, 3, 5, 4, 3, 3, 2, 5, 3, 3, 3, 3, 4];

  // Entertainment scores
  const entertainmentScores = [4, 5, 5, 3, 4, 4, 1, 4, 3, 4, 1, 3, 4, 1, 4, 3, 2, 1, 1, 1, 1, 5, 4, 4, 4, 1, 1, 1, 4, 1];

  // Internal resources scores
  const internalResourcesScores = [4, 4, 5, 1, 2, 5, 1, 5, 2, 5, 1, 2, 2, 4, 3, 1, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 2, 5, 5];

  // Housing prices scores
  const housingPricesScores = [3, 2, 2, 1, 3, 3, 4, 1, 1, 2, 4, 4, 4, 5, 4, 4, 3, 4, 4, 4, 4, 1, 4, 3, 3, 5, 2, 3, 3, 1];

  // School reputation scores
  const schoolReputationScores = [5, 4, 3, 4, 3, 5, 5, 5, 5, 5, 5, 3, 4, 3, 2, 2, 3, 3, 4, 5, 3, 2, 2, 5, 3, 2, 1, 2, 1];

  // Industry collaboration scores
  const industryCollaborationScores = [3, 3, 3, 4, 2, 3, 3, 2, 1, 4, 1, 3, 2, 3, 3, 1, 1, 1, 2, 4, 5, 3, 2, 2, 5, 3, 2, 1, 2, 3];

  // Calculate weighted scores for each region
  const weightedScores = regions.map((region, index) => {
    const originalScore = region.individuals.length;
    return {
      name: region.name,
      weightedScore: factors.reduce((acc, factor, i) => acc + (factor * originalScore * entranceThresholdScores[index * 7 + i] * teacherQualityScores[index * 7 + i] * entertainmentScores[index * 7 + i] * internalResourcesScores[index * 7 + i] * housingPricesScores[index * 7 + i] * schoolReputationScores[index * 7 + i] * industryCollaborationScores[index * 7 + i]), 0)
    };
  });

  // Sort regions by weighted scores
  weightedScores.sort((a, b) => b.weightedScore - a.weightedScore);

  // Display top three regions for each
  const resultsDiv = document.getElementById("results");
  resultsDiv.innerHTML = "<h2>各地區前三名：</h2>";
  regions.forEach(region => {
    resultsDiv.innerHTML += `<h3>${region.name}</h3>`;
    const topThree = weightedScores.filter(score => score.name === region.name).slice(0, 3);
    topThree.forEach((entry, index) => {
      resultsDiv.innerHTML += `<p>${index + 1}. ${entry.name} - ${entry.weightedScore.toFixed(2)}</p>`;
    });
  });
}

