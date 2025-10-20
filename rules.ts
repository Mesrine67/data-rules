interface RulesData {
  id: string;
  title: string;
  icon: { type: string; name: string; prefix: string };
  gradient: string;
  borderColor: string;
  content: string;
}

const rulesData: RulesData[] = [
  {
    id: "preambule",
    title: "Préambule : L'Esprit du Roleplay TEST commit",
    icon: { type: 'fa', name: 'book-open', prefix: 'fas' },
    gradient: "from-blue-500/20 to-cyan-500/20",
    borderColor: "border-blue-500/30",
    content: `Sunset RP est un serveur de Roleplay (RP) conçu pour offrir une expérience riche, dynamique et immersive. Ce règlement est un cadre narratif et collaboratif, et non une simple liste de restrictions. Il vise à encourager la créativité, la liberté de jeu et la bonne foi de chaque joueur pour créer ensemble des histoires mémorables.`,
  },
  {
    id: "acces",
    title: "I. Conditions d'accès et Règles fondamentales",
    icon: { type: 'fa', name: 'shield-alt', prefix: 'fas' },
    gradient: "from-emerald-500/20 to-teal-500/20",
    borderColor: "border-emerald-500/30",
    content: `
      <h4 class="font-semibold mb-2">1. Conditions d'accès</h4>
      <p class="mb-4">L'accès au serveur est strictement réservé aux joueurs âgés de <strong>15 ans minimum</strong>.</p>
      
      <h4 class="font-semibold mb-2">2. La Loi d'Or du serveur : "Pas vu, pas pris"</h4>
      <p class="mb-2">Toute action, qu'elle soit légale ou illégale, n'a de conséquences en jeu que si elle est observée et constatée en Roleplay par un autre joueur, un PNJ officiel (comme un policier), ou un membre du staff en mode observateur si l'action relève d'une règle du serveur.</p>
      <p class="mb-2">Cette règle encourage la prudence et la furtivité pour les activités illégales, ainsi que la vigilance pour les forces de l'ordre.</p>
      
      <div class="bg-destructive/10 border border-destructive/20 rounded-lg p-4 mt-4">
        <p class="text-sm"><strong>Exception :</strong> Si une scène est enregistrée (rec), la règle "pas vu, pas pris" ne s'applique pas.</p>
        <p class="text-sm mt-2"><strong>Attention :</strong> Cette règle ne doit en aucun cas être exploitée pour justifier des actions "anti-jeu", du Powergaming, du Metagaming, ou pour nuire délibérément à l'expérience de jeu des autres. Tout abus sera sanctionné.</p>
      </div>
    `,
  },
  {
    id: "staff-rp",
    title: "I.bis. Séparation Staff/RP et Conflits d'Intérêts",
    icon: { type: 'fa', name: 'user-shield', prefix: 'fas' },
    gradient: "from-indigo-500/20 to-purple-500/20",
    borderColor: "border-indigo-500/30",
    content: `
      <h4 class="font-semibold mb-2">1. Principe de séparation</h4>
      <p class="mb-4">Pour garantir l'impartialité de la gestion du serveur et éviter tout conflit d'intérêt, certains rôles staff sont incompatibles avec certains personnages RP.</p>
      
      <h4 class="font-semibold mb-2">2. Règles par rôle staff</h4>
      <div class="overflow-x-auto mb-4">
        <table class="w-full text-sm border-collapse">
          <thead>
            <tr class="bg-card border-b border-border">
              <th class="text-left p-3 font-semibold">Rôle Staff</th>
              <th class="text-left p-3 font-semibold">Persos RP Compatibles</th>
              <th class="text-left p-3 font-semibold">Persos RP Incompatibles</th>
            </tr>
          </thead>
          <tbody>
            <tr class="border-b border-border">
              <td class="p-3"><strong>Admin Responsable Illégal</strong></td>
              <td class="p-3 text-green-500">✅ Civil, Entreprise légale</td>
              <td class="p-3 text-destructive">❌ Flic, EMS, Justice</td>
            </tr>
            <tr class="border-b border-border">
              <td class="p-3"><strong>Admin Responsable Légal/Police</strong></td>
              <td class="p-3 text-green-500">✅ Civil, Flic</td>
              <td class="p-3 text-destructive">❌ Gang, Orga illégale</td>
            </tr>
            <tr class="border-b border-border">
              <td class="p-3"><strong>Admin Neutre</strong></td>
              <td class="p-3 text-green-500">✅ Tous les personnages</td>
              <td class="p-3 text-green-500">✅ Aucune restriction</td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <h4 class="font-semibold mb-2">3. Justification</h4>
      <div class="bg-card border border-border rounded-lg p-4 mb-4">
        <h5 class="font-medium mb-2">Pourquoi ces restrictions ?</h5>
        <ul class="text-sm space-y-2">
          <li><strong>• Accès aux informations sensibles :</strong> Un admin illégal connaît les planques, membres et projets des gangs. Jouer un flic créerait un métagaming inévitable.</li>
          <li><strong>• Conflit d'intérêt :</strong> Impossible de rester objectif quand son personnage RP est directement impacté par ses décisions staff.</li>
          <li><strong>• Crédibilité :</strong> Les joueurs doivent pouvoir faire confiance à l'impartialité du staff.</li>
          <li><strong>• Équité :</strong> Garantir que personne n'a d'avantage déloyal grâce à son rôle staff.</li>
        </ul>
      </div>
      
      <div class="bg-destructive/10 border border-destructive/20 rounded-lg p-4">
        <h5 class="font-medium mb-2">⚠️ Obligation de choix</h5>
        <p class="text-sm mb-2">Si un membre du staff souhaite changer de responsabilité (ex: passer d'admin neutre à admin illégal), il devra :</p>
        <ul class="text-sm space-y-1">
          <li>1. Informer le Bureau Administratif</li>
          <li>2. Supprimer ou transférer tout personnage incompatible</li>
          <li>3. Attendre validation avant d'exercer ses nouvelles fonctions</li>
        </ul>
        <p class="text-sm mt-3"><strong>Sanction :</strong> Le non-respect de cette règle entraînera un retrait immédiat du rôle staff et des sanctions pouvant aller jusqu'au bannissement définitif.</p>
      </div>
    `,
  },
  {
    id: "legal",
    title: "II. Règlement légal (Vie politique, entreprises et conduite civile)",
    icon: { type: 'fa', name: 'balance-scale', prefix: 'fas' },
    gradient: "from-amber-500/20 to-orange-500/20",
    borderColor: "border-amber-500/30",
    content: `
      <h4 class="font-semibold mb-2">1. Vie politique et législative</h4>
      <p class="mb-4"><strong>Le Gouvernement :</strong> La ville est gouvernée par un maire élu par les citoyens. Ce système vise à créer des dynamiques de pouvoir et des débats au sein de la communauté.</p>
      <ul class="list-disc list-inside mb-4 space-y-1">
        <li>Le rôle du maire est d'administrer les affaires courantes de la ville et de proposer des lois</li>
        <li><strong>Mandat :</strong> Le mandat du maire est de trois (3) mois et il ne peut exercer plus de deux mandats consécutifs</li>
      </ul>
      
      <h4 class="font-semibold mb-2">2. Activités commerciales</h4>
      <p class="mb-2">Toute activité commerciale légale requiert l'obtention d'une licence spécifique auprès des autorités en RP.</p>
      
      <div class="bg-card border border-border rounded-lg p-4 mt-4">
        <h5 class="font-medium mb-2">Exemples de licences :</h5>
        <ul class="text-sm space-y-1">
          <li>• Licence Agricole : 100 000 $</li>
          <li>• Licence Commerce Alimentaire : 125 000 $</li>
          <li>• Licence Restaurant : 175 000 $</li>
          <li>• Licence Bar : 200 000 $</li>
          <li>• Licence Garage Mécanique : 225 000 $</li>
        </ul>
      </div>
      
      <h4 class="font-semibold mb-2 mt-4">3. Conduite civile et code de la route</h4>
      <ul class="list-disc list-inside space-y-1">
        <li>Respect obligatoire du code de la route</li>
        <li>Limites de vitesse : 100 km/h en ville, 60 km/h sur les sentiers</li>
        <li>Arrêt minimum de 8 secondes aux feux, 3 secondes aux stops</li>
        <li>Interdiction d'écraser des PNJ</li>
      </ul>
    `,
  },
  {
    id: "forces-ordre",
    title: "III. Règlement des forces de l'ordre et des services d'urgence",
    icon: { type: 'fa', name: 'shield', prefix: 'fas' },
    gradient: "from-blue-600/20 to-indigo-600/20",
    borderColor: "border-blue-600/30",
    content: `
      <h4 class="font-semibold mb-2">1. Forces de l'ordre (LSPD / BCSO / FIB)</h4>
      <p class="mb-4">Les forces de l'ordre ont pour mission de mener des enquêtes, de recueillir des preuves, de rechercher les auteurs d'infractions et de veiller au respect du Code Pénal. Leur RP doit être irréprochable et la corruption est interdite.</p>
      <div class="grid md:grid-cols-3 gap-4 mb-4">
        <div class="bg-card border border-border rounded-lg p-3">
          <h5 class="font-medium text-primary mb-1">LSPD</h5>
          <p class="text-sm">Champs d'action sur les 4 voies et zones citadines</p>
        </div>
        <div class="bg-card border border-border rounded-lg p-3">
          <h5 class="font-medium text-primary mb-1">BCSO</h5>
          <p class="text-sm">Champs d'action sur les 4 voies, zones naturelles et agricoles</p>
        </div>
        <div class="bg-card border border-border rounded-lg p-3">
          <h5 class="font-medium text-primary mb-1">FIB</h5>
          <p class="text-sm">Champs d'action sur toute la carte, agit de manière discrète</p>
        </div>
      </div>
      <h4 class="font-semibold mb-2">2. Services d'urgence (EMS et Pompiers)</h4>
      <ul class="list-disc list-inside space-y-1">
        <li><strong>EMS :</strong> Champ d'action sur toute la carte, doivent réanimer sans discrimination</li>
        <li><strong>Pompiers :</strong> Lutte contre les incendies urbains et agricoles</li>
        <li>Interdiction de réanimer en pleine scène</li>
      </ul>
      <h4 class="font-semibold mb-2 mt-4">3. Règles spécifiques</h4>
      <ul class="list-disc list-inside space-y-1">
        <li>Poursuites : Cuts autorisés après 5 minutes, pits interdits</li>
        <li>GAV : Maximum 1 heure</li>
        <li>Permis de port d'arme : 155 000 $ + visite médicale + cours LSPD</li>
        <li>Infiltration d'organisations interdite</li>
      </ul>
    `,
  },
  {
    id: "illegal",
    title: "IV. Règlement illégal (Activités criminelles et interdictions strictes)",
    icon: { type: 'fa', name: 'exclamation-triangle', prefix: 'fas' },
    gradient: "from-red-500/20 to-rose-500/20",
    borderColor: "border-red-500/30",
    content: `
      <h4 class="font-semibold mb-2">1. Activités criminelles</h4>
      <p class="mb-4">Les activités illégales (vol, braquage, trafic, enlèvement, etc.) sont autorisées tant qu'elles respectent les règles du RP et la "Loi d'Or". Chaque acte illégal doit avoir une motivation RP plausible.</p>
      <div class="bg-destructive/10 border border-destructive/20 rounded-lg p-4 mb-4">
        <h5 class="font-medium mb-2">Règles du racket :</h5>
        <ul class="text-sm space-y-1">
          <li>• Interdiction de prendre l'arme d'un joueur s'il ne l'a pas sortie</li>
          <li>• Maximum la moitié de l'argent total d'une personne</li>
          <li>• Interdiction d'amener à un distributeur</li>
          <li>• Port du masque obligatoire près des zones de "mass RP"</li>
          <li>• Interdiction de braquer les EMS</li>
        </ul>
      </div>
      <h4 class="font-semibold mb-2">2. Interdictions strictes (HRP)</h4>
      <div class="grid md:grid-cols-2 gap-4">
        <div class="space-y-2">
          <div class="bg-card border border-border rounded-lg p-3">
            <h5 class="font-medium text-destructive mb-1">Fear RP</h5>
            <p class="text-sm">Obligation de simuler la peur en situation de danger</p>
          </div>
          <div class="bg-card border border-border rounded-lg p-3">
            <h5 class="font-medium text-destructive mb-1">Powergaming</h5>
            <p class="text-sm">Créer des situations irréalistes pour un avantage</p>
          </div>
          <div class="bg-card border border-border rounded-lg p-3">
            <h5 class="font-medium text-destructive mb-1">Metagaming</h5>
            <p class="text-sm">Utiliser des infos HRP pour avantager son personnage</p>
          </div>
        </div>
        <div class="space-y-2">
          <div class="bg-card border border-border rounded-lg p-3">
            <h5 class="font-medium text-destructive mb-1">Stream Sniping</h5>
            <p class="text-sm">Regarder le stream d'un joueur pour le localiser</p>
          </div>
          <div class="bg-card border border-border rounded-lg p-3">
            <h5 class="font-medium text-destructive mb-1">Deathmatch</h5>
            <p class="text-sm">Tuer sans interaction RP significative</p>
          </div>
          <div class="bg-card border border-border rounded-lg p-3">
            <h5 class="font-medium text-destructive mb-1">Cheating</h5>
            <p class="text-sm">Logiciels tiers, macros, exploitation de bugs</p>
          </div>
        </div>
      </div>
    `,
  },
  {
    id: "sanctions",
    title: "V. Sanctions et gestion de l'activité RP",
    icon: { type: 'fa', name: 'gavel', prefix: 'fas' },
    gradient: "from-purple-500/20 to-violet-500/20",
    borderColor: "border-purple-500/30",
    content: `
      <h4 class="font-semibold mb-2">1. Sanctions</h4>
      <p class="mb-4">Le non-respect du règlement entraînera des sanctions proportionnelles à la gravité et au caractère répétitif de l'infraction. Les décisions sont prises de manière collégiale par le Bureau du staff.</p>
      <div class="grid md:grid-cols-2 gap-4 mb-4">
        <div class="bg-card border border-border rounded-lg p-4">
          <h5 class="font-medium mb-2">Sanctions possibles :</h5>
          <ul class="text-sm space-y-1">
            <li>• Avertissement oral ou écrit</li>
            <li>• Retrait de licence ou de biens</li>
            <li>• "Kick" du serveur</li>
            <li>• Bannissement temporaire ou définitif</li>
          </ul>
        </div>
        <div class="bg-card border border-border rounded-lg p-4">
          <h5 class="font-medium mb-2">Gestion de l'activité :</h5>
          <ul class="text-sm space-y-1">
            <li>• Présence régulière requise</li>
            <li>• Investissement dans le RP</li>
            <li>• Cohérence du personnage</li>
            <li>• Remplacement PNJ possible</li>
          </ul>
        </div>
      </div>
      <h4 class="font-semibold mb-2">2. Préparation de scènes complexes</h4>
      <p class="mb-2">Pour toute scène d'envergure (braquage de grande banque, événement de faction, etc.), les joueurs sont encouragés à contacter le Bureau Administratif du staff.</p>
      <p>Il est autorisé de préparer ces scènes en HRP avec l'aide d'un ou de plusieurs membres du staff.</p>
    `,
  },
  {
    id: "evenements",
    title: "VI. Événements et Activités Communautaires",
    icon: { type: 'fa', name: 'calendar-alt', prefix: 'fas' },
    gradient: "from-pink-500/20 to-rose-500/20",
    borderColor: "border-pink-500/30",
    content: `
      <h4 class="font-semibold mb-2">1. Événements officiels</h4>
      <p class="mb-4">Le staff organise régulièrement des événements thématiques pour dynamiser la vie de la ville :</p>
      <ul class="list-disc list-inside space-y-1 mb-4">
      <li>Élections municipales (tous les 3 mois)</li>
      <li>Festivals saisonniers (été, Halloween, Noël, etc.)</li>
      <li>Compétitions sportives (courses automobiles, tournois de boxe)</li>
      <li>Soirées à thème dans les établissements de nuit</li>
      </ul>
      <h4 class="font-semibold mb-2">2. Événements communautaires</h4>
      <p class="mb-2">Les joueurs sont encouragés à organiser leurs propres événements pour enrichir l'expérience RP :</p>
      <div class="bg-card border border-border rounded-lg p-4 mb-4">
      <h5 class="font-medium mb-2">Comment organiser un événement :</h5>
      <ol class="text-sm space-y-1 list-decimal list-inside">
      <li>Soumettre une proposition au staff via le Discord</li>
      <li>Obtenir les autorisations nécessaires en RP (mairie, LSPD)</li>
      <li>Promouvoir l'événement via les médias de la ville</li>
      <li>Respecter les règles du serveur pendant l'événement</li>
      </ol>
      </div>
      <h4 class="font-semibold mb-2">3. Récompenses et participation</h4>
      <p class="mb-2">La participation active aux événements est valorisée et récompensée :</p>
      <ul class="list-disc list-inside space-y-1">
      <li>Récompenses financières pour les gagnants de compétitions</li>
      <li>Objets exclusifs et cosmétiques uniques</li>
      <li>Points de réputation augmentant votre influence dans la ville</li>
      <li>Possibilité d'accéder à des zones ou activités exclusives</li>
      </ul>
      <div class="bg-primary/10 border border-primary/20 rounded-lg p-4 mt-4">
      <h5 class="font-medium mb-2">Note importante :</h5>
      <p class="text-sm">Les événements sont des moments privilégiés où la créativité et l'implication RP sont particulièrement encouragées. Ils constituent une excellente occasion de développer votre personnage et de créer des liens avec d'autres joueurs.</p>
      </div>
    `,
  },
  {
    id: "glossaire",
    title: "VIII. Glossaire RP pour les débutants",
    icon: { type: 'fa', name: 'question-circle', prefix: 'fas' },
    gradient: "from-teal-500/20 to-cyan-500/20",
    borderColor: "border-teal-500/30",
    content: `
      <h4 class="font-semibold mb-2">Termes de base</h4>
      <div class="grid md:grid-cols-2 gap-4 mb-4">
        <div class="space-y-3">
          <div class="bg-card border border-border rounded-lg p-3">
            <h5 class="font-medium text-primary mb-1">RP (Roleplay)</h5>
            <p class="text-sm">Le fait de jouer un rôle, incarner un personnage</p>
          </div>
          <div class="bg-card border border-border rounded-lg p-3">
            <h5 class="font-medium text-primary mb-1">HRP (Hors Roleplay)</h5>
            <p class="text-sm">Tout ce qui se dit en dehors du jeu de rôle</p>
          </div>
          <div class="bg-card border border-border rounded-lg p-3">
            <h5 class="font-medium text-primary mb-1">Fear RP</h5>
            <p class="text-sm">Obligation de simuler la peur en situation de danger</p>
          </div>
        </div>
        <div class="space-y-3">
          <div class="bg-card border border-border rounded-lg p-3">
            <h5 class="font-medium text-primary mb-1">PK (Player Kill)</h5>
            <p class="text-sm">Mort du personnage en RP</p>
          </div>
          <div class="bg-card border border-border rounded-lg p-3">
            <h5 class="font-medium text-primary mb-1">GAV</h5>
            <p class="text-sm">Garde à Vue (maximum 1 heure)</p>
          </div>
          <div class="bg-card border border-border rounded-lg p-3">
            <h5 class="font-medium text-primary mb-1">Whitelist</h5>
            <p class="text-sm">Système de candidature pour accéder au serveur</p>
          </div>
        </div>
      </div>
      <div class="bg-primary/10 border border-primary/20 rounded-lg p-4">
        <h5 class="font-medium mb-2">Rappel important :</h5>
        <p class="text-sm">Sunset RP est un serveur whitelist. Toutes ces règles doivent être respectées pour maintenir une expérience de jeu de qualité pour tous les joueurs.</p>
      </div>
    `,
  },
]
export type { RulesData }
export default rulesData