function calculateEmaan() {
    // Generate a random emaan percentage between 1 and 100
    var emaan = Math.floor(Math.random() * 100) + 1;
    
    // Check the emaan percentage and return a message accordingly
    if (emaan > 60) {
      return "MashaAllah! Apka emaan " + emaan + "% hai. Aap boht deeni bhai/bhen hain.";
    } else if (emaan > 30 && emaan <= 60) {
      return " Apka emaan " + emaan + "% hai. InshaAllah! Aap or izafa karenge.";
    } else if (emaan <= 30) {
      return "Astaghfirullah! Apka emaan " + emaan + "% hai. CHAL PAJH JA!";
    }
  }
  