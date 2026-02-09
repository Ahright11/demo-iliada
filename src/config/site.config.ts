// Site Configuration - Edit this file to customize your restaurant website

export const siteConfig = {
  // Business Information
  businessName: "ILIADA",
  tagline: "Η αυθεντική γεύση της Ελλάδας στην καρδιά της Πλάκας",
  description: "Αυθεντική ελληνική κουζίνα με γενναιόδωρες μερίδες και εξαιρετική φιλοξενία στην ιστορική Πλάκα, με θέα την Ακρόπολη",
  foundedYear: 2005,

  // Story / About
  about: {
    founderName: "Δημήτρης",
    founderRelation: "ιδιοκτήτης",
    familyMember: "Μαρία",
    familyRelation: "σύζυγος",
    familyQuote: "Η καλύτερη συνταγή είναι η αγάπη που βάζεις σε κάθε πιάτο",
    location: "Πλάκας",
    story: "Στην καρδιά της ιστορικής Πλάκας, η ILIADA προσφέρει από το 2005 αυθεντικές ελληνικές γεύσεις με την παραδοσιακή ελληνική φιλοξενία. Ο Δημήτρης και η Μαρία δημιούργησαν ένα χώρο όπου κάθε επισκέπτης νιώθει σαν στο σπίτι του, απολαμβάνοντας σπιτικές συνταγές, γενναιόδωρες μερίδες και άψογη εξυπηρέτηση.",
    sourcing: [
      "Φρέσκα υλικά από επιλεγμένους προμηθευτές",
      "Ελληνικό ελαιόλαδο εξαιρετικής ποιότητας",
      "Παραδοσιακές συνταγές με σεβασμό στην παράδοση"
    ],
    musicNights: ""
  },

  // Contact Information
  phone: "+302114076438",
  phoneDisplay: "21 1407 6438",
  whatsapp: "302114076438",
  whatsappMessage: "Γεια σας, θα ήθελα πληροφορίες για κράτηση στην ILIADA.",
  email: "",
  address: {
    street: "Κυδαθηναίων 1-3",
    city: "Αθήνα",
    postalCode: "105 57",
    full: "Κυδαθηναίων 1-3, Αθήνα 105 57"
  },

  // Social Links
  socialLinks: {
    instagram: "",
    facebook: "https://www.facebook.com/iliada.cafe",
    tripadvisor: "https://tripadvisor.com/",
    googleReviews: "https://www.google.com/maps/place/ILIADA",
  },

  // Delivery Platforms
  delivery: {
    efood: "",
    wolt: "",
  },

  // Working Hours
  hours: [
    { day: "Δευτέρα", time: "11:00 - 18:00" },
    { day: "Τρίτη", time: "11:00 - 18:00" },
    { day: "Τετάρτη", time: "11:00 - 18:00" },
    { day: "Πέμπτη", time: "11:00 - 18:00" },
    { day: "Παρασκευή", time: "11:00 - 18:00" },
    { day: "Σάββατο", time: "11:00 - 18:00" },
    { day: "Κυριακή", time: "11:00 - 18:00" },
  ],

  // Ratings
  rating: 4.9,
  totalReviews: 847,

  // Parking
  parking: "Δημόσιο parking στην περιοχή της Πλάκας",

  // Google Maps
  mapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3145.2!2d23.7275!3d37.9715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDU4JzE3LjQiTiAyM8KwNDMnMzkuMCJF!5e0!3m2!1sel!2sgr!4v1234567890",
  mapsDirectionsUrl: "https://www.google.com/maps/dir//Κυδαθηναίων+1-3,+Αθήνα+105+57",

  // Special Dish (featured on menu page)
  specialDish: {
    name: "Μουσακάς",
    description: "Παραδοσιακός με μελιτζάνα, κιμά και κρεμώδη μπεσαμέλ",
    price: 12.50,
  },

  // Menu
  menu: [
    {
      id: "orektika",
      name: "Ορεκτικά",
      items: [
        { name: "Τζατζίκι", description: "Παραδοσιακό με αγγούρι και σκόρδο", price: 4.50 },
        { name: "Ταραμοσαλάτα", description: "Σπιτική συνταγή", price: 4.80 },
        { name: "Μελιτζανοσαλάτα", description: "Ψητή μελιτζάνα με σκόρδο", price: 4.50 },
        { name: "Φέτα ψητή", description: "Με ντομάτα, πιπεριά και ρίγανη", price: 6.50 },
        { name: "Σαγανάκι", description: "Τηγανητό τυρί κεφαλογραβιέρα", price: 7.00 },
        { name: "Ντολμαδάκια", description: "Αμπελόφυλλα με ρύζι και μυρωδικά", price: 5.50 },
        { name: "Κολοκυθοκεφτέδες", description: "Με σάλτσα γιαουρτιού", price: 5.80 },
        { name: "Γαρίδες σαγανάκι", description: "Με φέτα και ντομάτα", price: 11.50 },
      ],
    },
    {
      id: "kyrios",
      name: "Κυρίως Πιάτα",
      items: [
        { name: "Μουσακάς", description: "Παραδοσιακός με μελιτζάνα και μπεσαμέλ", price: 12.50, isSpecial: true },
        { name: "Παστίτσιο", description: "Με κιμά και κρεμώδη μπεσαμέλ", price: 11.50 },
        { name: "Γεμιστά", description: "Ντομάτες και πιπεριές με αρωματικό ρύζι", price: 10.50 },
        { name: "Παπουτσάκια", description: "Μελιτζάνες με κιμά και μπεσαμέλ", price: 11.00 },
        { name: "Στιφάδο", description: "Μοσχαράκι με κρεμμυδάκια", price: 13.50 },
        { name: "Κοκκινιστό κοτόπουλο", description: "Με χυλοπίτες χειροποίητες", price: 11.00 },
        { name: "Αρνί στο φούρνο", description: "Με πατάτες λεμονάτες", price: 14.50 },
      ],
    },
    {
      id: "schara",
      name: "Από τη Σχάρα",
      items: [
        { name: "Σουβλάκι χοιρινό", description: "Με πίτα, ντομάτα και τζατζίκι", price: 8.50 },
        { name: "Σουβλάκι κοτόπουλο", description: "Με πίτα, ντομάτα και τζατζίκι", price: 8.50 },
        { name: "Μπιφτέκι", description: "Χειροποίητο με πατάτες τηγανητές", price: 10.50 },
        { name: "Παϊδάκια", description: "Αρνίσια με λεμόνι και ρίγανη", price: 16.00 },
        { name: "Μπριζόλα χοιρινή", description: "350γρ με πατάτες", price: 13.50 },
        { name: "Κοτόπουλο φιλέτο", description: "Στη σχάρα με λαχανικά", price: 11.50 },
      ],
    },
    {
      id: "thalassina",
      name: "Θαλασσινά",
      items: [
        { name: "Χταπόδι", description: "Ψητό με ελαιόλαδο και ξύδι", price: 15.50 },
        { name: "Καλαμαράκια", description: "Τηγανητά με λεμόνι", price: 13.50 },
        { name: "Γαρίδες σχάρας", description: "Με λάδι λεμονάτο", price: 16.50 },
        { name: "Τσιπούρα", description: "Ψητή στο φούρνο με λαδολέμονο", price: 17.00 },
        { name: "Μπακαλιάρος", description: "Με σκορδαλιά", price: 12.50 },
      ],
    },
    {
      id: "salates",
      name: "Σαλάτες",
      items: [
        { name: "Χωριάτικη", description: "Ντομάτα, αγγούρι, φέτα, ελιές Καλαμών", price: 7.50 },
        { name: "Πράσινη σαλάτα", description: "Μαρούλι, άνηθο, σάλτσα λεμονιού", price: 6.00 },
        { name: "Ρόκα", description: "Με παρμεζάνα και βαλσάμικο", price: 8.50 },
        { name: "Ντακός", description: "Κριθαρένιο παξιμάδι, ντομάτα, φέτα", price: 7.00 },
      ],
    },
    {
      id: "pota",
      name: "Ποτά",
      items: [
        { name: "Κρασί κόκκινο", description: "Κτήμα Ελληνικό - 500ml", price: 9.00 },
        { name: "Κρασί λευκό", description: "Κτήμα Ελληνικό - 500ml", price: 9.00 },
        { name: "Ρετσίνα", description: "500ml", price: 8.00 },
        { name: "Μπύρα", description: "Ελληνική (330ml)", price: 4.00 },
        { name: "Ούζο", description: "50ml", price: 5.00 },
        { name: "Τσίπουρο", description: "50ml", price: 5.50 },
        { name: "Αναψυκτικά", description: "Coca Cola, Fanta, Sprite", price: 2.50 },
        { name: "Νερό", description: "500ml", price: 1.50 },
        { name: "Καφές ελληνικός", description: "", price: 3.00 },
        { name: "Καφές φίλτρου", description: "", price: 3.00 },
      ],
    },
    {
      id: "glyka",
      name: "Γλυκά",
      items: [
        { name: "Μπακλαβάς", description: "Με καρύδια και μέλι", price: 4.50 },
        { name: "Γαλακτομπούρεκο", description: "Παραδοσιακό με κρέμα", price: 4.50 },
        { name: "Καταΐφι", description: "Με αμύγδαλα", price: 4.50 },
        { name: "Γιαούρτι με μέλι", description: "Ελληνικό γιαούρτι με θυμαρίσιο μέλι", price: 5.00 },
        { name: "Παγωτό", description: "Δύο μπάλες (βανίλια, σοκολάτα, φράουλα)", price: 4.00 },
      ],
    },
  ],

  // Live Music Events
  events: [],

  // Testimonials
  testimonials: [
    {
      name: "Porter KHOR",
      rating: 5,
      time: "πριν 2 μήνες",
      text: "Πολύ καλό ελληνικό φαγητό. Εξαιρετικά νόστιμο. Μεγάλες μερίδες, άριστη σχέση ποιότητας-τιμής. Δωρεάν επιδόρπιο. Η εξυπηρέτηση ήταν υπέροχη. Δωρεάν WiFi. Καθαρό περιβάλλον και η τουαλέτα άψογη. Θα ξανάρθουμε σίγουρα.",
      platform: "google" as const,
    },
    {
      name: "Ελένη Μ.",
      rating: 5,
      time: "πριν 3 εβδομάδες",
      text: "Η καλύτερη ταβέρνα στην Πλάκα! Ο μουσακάς ήταν απίστευτος και οι μερίδες τεράστιες. Το προσωπικό πολύ φιλικό και εξυπηρετικό. Με θέα την Ακρόπολη, δεν θα μπορούσε να είναι καλύτερα!",
      platform: "google" as const,
    },
    {
      name: "Γιώργος Κ.",
      rating: 5,
      time: "πριν 1 εβδομάδα",
      text: "Φανταστική εμπειρία! Δοκιμάσαμε παϊδάκια, χωριάτικη σαλάτα και τζατζίκι. Όλα φρεσκότατα και πεντανόστιμα. Και το δωρεάν γλυκό στο τέλος ήταν η τέλεια κερασάκι στην τούρτα. Σίγουρα θα επιστρέψουμε!",
      platform: "google" as const,
    },
    {
      name: "Maria S.",
      rating: 5,
      time: "πριν 1 μήνα",
      text: "Amazing traditional Greek food in the heart of Plaka! The portions were huge and the service exceptional. Everything was clean and the staff made us feel so welcome. The complimentary dessert was a lovely touch. Highly recommend!",
      platform: "tripadvisor" as const,
    },
    {
      name: "Κατερίνα Π.",
      rating: 5,
      time: "πριν 2 εβδομάδες",
      text: "Τέλεια τοποθεσία, άψογη εξυπηρέτηση και πεντανόστιμο φαγητό! Το παστίτσιο και τα γεμιστά ήταν σπιτικά και πεντανόστιμα. Οι τιμές πολύ λογικές για την περιοχή. Θα το προτείνω σε όλους τους φίλους μου!",
      platform: "google" as const,
    },
    {
      name: "Νίκος Δ.",
      rating: 5,
      time: "πριν 10 ημέρες",
      text: "Η ILIADA είναι ένα κρυφό στολίδι στην Πλάκα. Το φαγητό εξαιρετικό, οι μερίδες γενναιόδωρες και η ατμόσφαιρα ζεστή. Η καθαριότητα του χώρου άψογη. Σίγουρα θα γίνει η αγαπημένη μας ταβέρνα στην Αθήνα!",
      platform: "google" as const,
    },
  ],

  // Gallery
  gallery: [
    { id: 1, alt: "Εσωτερικός χώρος της ILIADA με θέα την Πλάκα" },
    { id: 2, alt: "Παραδοσιακός μουσακάς με μπεσαμέλ" },
    { id: 3, alt: "Φρέσκα ορεκτικά - τζατζίκι, σαγανάκι, ντολμαδάκια" },
    { id: 4, alt: "Χώρος εστιατορίου με παραδοσιακή διακόσμηση" },
    { id: 5, alt: "Παϊδάκια και σουβλάκια από τη σχάρα" },
    { id: 6, alt: "Φρέσκα θαλασσινά - χταπόδι και καλαμαράκια" },
  ],

  // Copyright
  copyrightYear: 2026,
};

export type SiteConfig = typeof siteConfig;
