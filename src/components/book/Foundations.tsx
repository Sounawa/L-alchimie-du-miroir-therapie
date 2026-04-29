'use client';

import React from 'react';
import Callout from './Callout';
import QuoteBlock from './QuoteBlock';
import ArabicVerse from './ArabicVerse';
import BookTable from './BookTable';
import ExerciseBox from './ExerciseBox';
import OrnamentDivider from './OrnamentDivider';
import BookPage from './BookPage';

const gold = '#C9A227';
const goldLight = '#D4AF37';
const goldDark = '#8B6914';
const textLight = '#E8E4DC';
const textMuted = '#9B9590';
const textDark = '#1A1A2E';
const green = '#2E8B57';
const cyan = '#00D4FF';
const red = '#DC2626';
const bgDark = '#161B22';
const bgMid = '#212D3A';

const styles = {
  h1: {
    textAlign: 'center' as const,
    fontSize: '2.5rem',
    fontWeight: 800,
    color: gold,
    marginBottom: '0.25rem',
    letterSpacing: '0.04em',
  },
  h1Sub: {
    textAlign: 'center' as const,
    fontSize: '1.15rem',
    color: textMuted,
    marginBottom: '2rem',
    fontWeight: 400,
    letterSpacing: '0.03em',
  },
  h2: {
    fontSize: '1.5rem',
    fontWeight: 700,
    color: textLight,
    borderLeft: `4px solid ${gold}`,
    paddingLeft: '1rem',
    marginBottom: '1.25rem',
    marginTop: '2.5rem',
    lineHeight: 1.3,
  },
  h3: {
    fontSize: '1.15rem',
    fontWeight: 700,
    color: goldLight,
    marginTop: '2rem',
    marginBottom: '0.75rem',
    lineHeight: 1.4,
  },
  p: {
    fontSize: '0.95rem',
    lineHeight: 1.8,
    color: textLight,
    marginBottom: '1rem',
  },
  bulletList: {
    fontSize: '0.95rem',
    lineHeight: 1.8,
    color: textLight,
    paddingLeft: '1.25rem',
    marginBottom: '1rem',
  },
  bulletItem: {
    marginBottom: '0.5rem',
  },
  formTable: {
    width: '100%',
    borderCollapse: 'collapse' as const,
    fontSize: '0.9rem',
  },
  formLabel: {
    fontWeight: 600,
    color: '#333',
    padding: '0.6rem 0.5rem 0.3rem',
    verticalAlign: 'top' as const,
    width: '180px',
    fontSize: '0.88rem',
  },
  formCell: {
    padding: '0.4rem 0.5rem',
    verticalAlign: 'top' as const,
  },
  input: {
    width: '100%',
    padding: '0.55rem 0.75rem',
    borderRadius: '8px',
    border: `1px solid ${goldDark}`,
    background: '#FFFFFF',
    color: textDark,
    fontSize: '0.88rem',
    outline: 'none',
    boxSizing: 'border-box' as const,
    fontFamily: 'inherit',
  },
  textarea: {
    width: '100%',
    padding: '0.55rem 0.75rem',
    borderRadius: '8px',
    border: `1px solid ${goldDark}`,
    background: '#FFFFFF',
    color: textDark,
    fontSize: '0.88rem',
    outline: 'none',
    resize: 'vertical' as const,
    minHeight: '70px',
    boxSizing: 'border-box' as const,
    fontFamily: 'inherit',
  },
  select: {
    width: '100%',
    padding: '0.55rem 0.75rem',
    borderRadius: '8px',
    border: `1px solid ${goldDark}`,
    background: '#FFFFFF',
    color: textDark,
    fontSize: '0.88rem',
    outline: 'none',
    boxSizing: 'border-box' as const,
    fontFamily: 'inherit',
    cursor: 'pointer',
  },
};

export default function Foundations() {
  return (
    <BookPage id="foundations">
      {/* ===== PART I TITLE ===== */}
      <div style={{ textAlign: 'center', paddingTop: '1rem', paddingBottom: '0.5rem' }}>
        <h1 style={styles.h1}>Partie I</h1>
        <p style={styles.h1Sub}>Fondations Thérapeutiques</p>
      </div>

      <OrnamentDivider />

      {/* ======================================================= */}
      {/* CHAPTER 1: Présentation & Positionnement                */}
      {/* ======================================================= */}
      <h2 style={styles.h2}>Chapitre 1 : Présentation &amp; Positionnement</h2>

      <Callout variant="success" title="🎯 Notre Vision">
        Ce manuel propose une intégration inédite entre la spiritualité islamique authentique et les approches cliniques contemporaines validées par la recherche. Notre conviction profonde est que la tradition spirituelle de l&#39;Islam — avec ses pratiques de dhikr, de tadaburr, de muhāsaba et de tawakkul — recèle des ressources thérapeutiques d&#39;une richesse considérable, trop longtemps ignorées par les sciences psychologiques occidentales. Nous ne prétendons ni remplacer ni concurrencer les thérapies existantes, mais plutôt offrir un cadre complémentaire qui honore la dimension spirituelle du patient tout en respectant les standards de rigueur clinique.
      </Callout>

      <h3 style={styles.h3}>Qu&#39;est-ce que le Tadaburr Thérapeutique ?</h3>
      <p style={styles.p}>
        Le <em> tadaburr</em> (تدبر) désigne littéralement le fait de méditer profondément, de réfléchir avec application et lenteur sur les signes — les versets du Coran, les événements de la vie, les mouvements de l&#39;âme. Dans la tradition prophétique, le Prophète ﷺ invoquait Dieu en disant : <strong>« Ô Allah, fais-nous méditer (faqirnā tadabburan) sur Ton Livre »</strong>. Le tadaburr n&#39;est donc pas une simple lecture intellectuelle, mais une immersion contemplative qui engage tout l&#39;être — cœur, esprit et corps.
      </p>
      <p style={styles.p}>
        Transposé dans le cadre thérapeutique, le <strong>Tadaburr Thérapeutique</strong> se définit comme une pratique méditative fondée sur la rumination intentionnelle et structurée de versets coraniques choisis, visant la transformation intérieure, la régulation émotionnelle et l&#39;intégration du sens spirituel dans le parcours de guérison du patient. Il ne s&#39;agit pas de lecture pieuse passive, mais d&#39;un acte thérapeutique actif où le verset devient un miroir de l&#39;âme du patient, révélant ses blessures, ses résistances et ses ressources insoupçonnées.
      </p>
      <p style={styles.p}>
        Les cinq applications thérapeutiques fondamentales du Tadaburr sont :</p>
      <ul style={styles.bulletList}>
        <li style={styles.bulletItem}>🌿 <strong>Régulation émotionnelle</strong> — Le tadaburr offre un cadre contenant pour l&#39;expression des affects tumultueux. En relisant lentement un verset qui résonne avec la souffrance vécue, le patient apprend à nommer, accueillir et moduler ses émotions sans s&#39;y identifier complètement. La répétition méditative crée un effet apaisant comparable à celui de la pleine conscience, tout en inscrivant l&#39;émotion dans un horizon de sens spirituel.</li>
        <li style={styles.bulletItem}>🪞 <strong>Reframing cognitif</strong> — Le verset coranique fonctionne comme un prisme qui décompose la vision déformée du patient et la recompose dans une perspective plus juste. Ainsi, la rumination anxieuse « Je suis abandonné » peut être revisitée à travers le verset : « N&#39;est-il pas suffisant que ton Seigneur soit pour toi un Témoin ? » (S.41, v.53). Le cadre de sens offert par le verset permet au patient de restructurer ses schémas cognitifs sans s&#39;aliéner de sa propre tradition.</li>
        <li style={styles.bulletItem}>💧 <strong>Expression émotionnelle authentique</strong> — Le tadaburr autorise et même encourage l&#39;expression des émotions difficiles (tristesse, colère, peur) dans un cadre sacré. Les versets coraniques regorgent de supplications qui modélisent cette vulnérabilité spirituelle : le prophète Yaqûb pleurant jusqu&#39;à perdre la vue, le prophète Ayyûb invoquant dans la maladie, Maryam tremblante au contact de l&#39;ange. Le patient apprend que sa souffrance n&#39;est pas un signe de faiblesse spirituelle mais une porte vers la proximité divine.</li>
        <li style={styles.bulletItem}>🌊 <strong>Acceptation radicale</strong> — Le concept coranique de <em>ridā</em> (contentement divin) et de <em>tawakkul</em> (confiance en Dieu) offre une voie d&#39;acceptation qui ne se réduit ni à la résignation ni au déni. Il s&#39;agit d&#39;un « oui » profond à la réalité telle qu&#39;elle est, sans renoncer pour autant à la recherche d&#39;une solution. Cette posture d&#39;acceptation radicale rejoint les apports de l&#39;ACT et de la thérapie des schémas, tout en s&#39;enracinant dans une cosmologie spirituelle cohérente.</li>
        <li style={styles.bulletItem}>✨ <strong>Connexion au sens</strong> — Le tadaburr reconnecte le patient à une dimension de sens qui transcende sa symptomatologie. La souffrance n&#39;est plus un événement absurde mais une épreuve dotée d&#39;une finalité : « Très certainement, Nous vous éprouverons par un peu de peur, de faim et de diminution de biens, de personnes et de récoltes. Et annonce la bonne nouvelle à ceux qui sont patients » (S.2, v.155). Cette reconnexion au sens est un facteur protecteur puissant contre le désespoir et la dépersonnalisation.</li>
      </ul>

      <h3 style={styles.h3}>Ce que Ce Manuel EST</h3>
      <ul style={styles.bulletList}>
        <li style={styles.bulletItem}>✅ Un <strong>cadre clinique structuré</strong> pour intégrer des pratiques spirituelles islamiques dans l&#39;accompagnement thérapeutique, avec des protocoles détaillés, des durées recommandées et des indicateurs d&#39;évaluation.</li>
        <li style={styles.bulletItem}>✅ Un <strong>outil complémentaire</strong> aux thérapies validées (TCC, EMDR, thérapie systémique, etc.) qui enrichit la palette des interventions disponibles sans s&#39;y substituer.</li>
        <li style={styles.bulletItem}>✅ Un <strong>espace de respect</strong> de l&#39;identité spirituelle du patient musulman, reconnaissant que la dimension religieuse fait partie intégrante de sa subjectivité et de son parcours de guérison.</li>
        <li style={styles.bulletItem}>✅ Un <strong>manuel de formation</strong> pour les thérapeutes souhaitant développer une compétence spécifique en intervention spirituelle islamique adaptée, fondée sur des bases théoriques solides.</li>
        <li style={styles.bulletItem}>✅ Une <strong>invitation au dialogue</strong> interdisciplinaire entre psychologues cliniciens, théologiens musulmans, chercheurs en neurosciences et praticiens de la santé mentale.</li>
      </ul>

      <h3 style={styles.h3}>Ce que Ce Manuel N&#39;EST PAS</h3>
      <Callout variant="danger" title="⚠️ Limites Essentielles">
        <div>
          <p style={{ marginBottom: '0.75rem' }}>
            ❌ <strong>Une fatwa ou un ouvrage de théologie</strong> — Ce manuel n&#39;a aucune prétention normative en matière de jurisprudence islamique (<em>fiqh</em>) ou de croyance (<em>ʿaqīda</em>). Les versets coraniques sont mobilisés dans leur dimension psychologique et existentielle, non comme sources légales. Tout questionnement d&#39;ordre théologique doit être renvoyé vers des savants qualifiés (<em>ʿulamāʾ</em>).
          </p>
          <p>
            ❌ <strong>Un substitut aux soins psychiatriques</strong> — Ce manuel ne remplace en aucun cas un traitement psychiatrique, un suivi médical ou une hospitalisation lorsque ceux-ci sont indiqués. Les protocoles décrits s&#39;adressent exclusivement à des patients dont la stabilité clinique de base est établie. En cas de doute sur l&#39;indication, le thérapeute doit systématiquement consulter un psychiatre référent.
          </p>
        </div>
      </Callout>

      <QuoteBlock cite="Al-Ghazâlî, Ihyāʾ ʿulūm al-dīn, Kitāb Ādāb al-Akhlāq">
        La maladie de l&#39;âme est plus digne de soin que la maladie du corps, car lorsque le corps meurt, l&#39;âme est délivrée, mais lorsque l&#39;âme est malade, le corps tout entier en porte le fardeau. Le remède de l&#39;âme se trouve dans la méditation des signes de Dieu et le retour sincère vers Lui, car c&#39;est Lui qui guérit les cœurs et apaise les esprits tourmentés.
      </QuoteBlock>

      <h3 style={styles.h3}>Le Cadre Théorique Hybride</h3>
      <p style={styles.p}>
        Le Tadaburr Thérapeutique repose sur un modèle hybride qui articule cinq piliers théoriques complémentaires. Chaque pilier apporte un éclairage spécifique, et leur intégration crée un cadre de compréhension plus riche que la somme de ses parties :
      </p>
      <BookTable
        headers={['Pilier Théorique', 'Fonction Clinique', 'Posture Thérapeutique']}
        rows={[
          [
            <span key="1"><strong>Trauma-Informed</strong><br /><span style={{ color: textMuted, fontSize: '0.82rem' }}>Judith Herman, van der Kolk</span></span>,
            'Stabilisation AVANT l\'exploration en profondeur. Aucun travail spirituel ne peut être entreint sans un cadre de sécurité intérieure préalable.',
            'Le thérapeute veille d\'abord à l\'ancrage, à la régulation neurovégétative et à la création d\'un espace de confiance avant d\'introduire tout contenu coranique.',
          ],
          [
            <span key="2"><strong>TCC Adaptée</strong><br /><span style={{ color: textMuted, fontSize: '0.82rem' }}>Beck, Hayes, Segal</span></span>,
            'Le Miroir = Reframing cognitif par le verset coranique.',
            'Le verset n\'est pas utilisé comme preuve d\'autorité mais comme prisme de restructuration. Le patient est invité à comparer sa pensée automatique avec la perspective offerte par le texte sacré.',
          ],
          [
            <span key="3"><strong>Mindfulness / ACT</strong><br /><span style={{ color: textMuted, fontSize: '0.82rem' }}>Kabat-Zinn, Wilson, Hayes</span></span>,
            'La Béance = Acceptation radicale de la réalité intérieure.',
            'Le tadaburr développe une présence attentive au texte et à soi, proche de la pleine conscience. Le concept de ridā rejoint celui de l\'acceptation inconditionnelle de l\'ACT.',
          ],
          [
            <span key="4"><strong>Existentiel Spirituel</strong><br /><span style={{ color: textMuted, fontSize: '0.82rem' }}>Frankl, Yalom, Irvin Yalom</span></span>,
            'Le SENS au-delà du symptôme. La souffrance n\'est pas un épiphénomène mais une porte vers un questionnement existentiel fondamental.',
            'Le thérapeute accompagne le patient dans sa quête de sens, en l\'aidant à distinguer la souffrance-nécessité de la souffrance-destructrice. La dimension spirituelle offre un horizon de sens que la psychologie seule ne peut fournir.',
          ],
          [
            <span key="5"><strong>Neuroscience</strong><br /><span style={{ color: textMuted, fontSize: '0.82rem' }}>Newberg, Davidson, Lutz</span></span>,
            'Preuves empiriques des effets du dhikr et du tadaburr sur le cerveau.',
            'Les études montrent que la méditation spirituelle répétitive (dhikr) active le cortex préfrontal, diminue l\'amygdale et renforce les circuits de régulation émotionnelle — résultats comparables à ceux observés dans la méditation bouddhiste et la prière chrétienne contemplative.',
          ],
        ]}
      />

      <h3 style={styles.h3}>La Preuve Scientifique</h3>
      <p style={styles.p}>Les données empiriques soutenant l&#39;efficacité du tadaburr et des pratiques spirituelles islamiques en contexte thérapeutique se multiplient :</p>
      <ul style={styles.bulletList}>
        <li style={styles.bulletItem}>🔬 <strong>Régulation de l&#39;amygdale</strong> — Les études d&#39;imagerie cérébrale montrent que la récitation répétitive du dhikr réduit l&#39;activation de l&#39;amygdale de 15 à 25 %, un effet comparable à celui de la méditation de pleine conscience de 8 semaines (Newberg et al., 2015).</li>
        <li style={styles.bulletItem}>🧠 <strong>Neuroplasticité et bien-être</strong> — La pratique régulière du tadaburr (3 séances hebdomadaires pendant 6 semaines) est associée à une augmentation de la densité corticale dans les régions liées à l&#39;empathie et à la régulation émotionnelle (Davidson et al., 2018).</li>
        <li style={styles.bulletItem}>❤️ <strong>Réduction du cortisol</strong> — Les patients pratiquant le dhikr structuré présentent une diminution significative du cortisol salivaire (en moyenne -18 %) par rapport aux groupes contrôles (Achour et al., 2020).</li>
        <li style={styles.bulletItem}>💊 <strong>Complémentarité avec la TCC</strong> — Une méta-analyse de 12 études contrôlées randomisées montre que l&#39;intégration de pratiques spirituelles islamiques à la TCC améliore significativement les résultats pour les patients musulmans souffrant d&#39;anxiété et de dépression (Koenig et al., 2021).</li>
        <li style={styles.bulletItem}>🏠 <strong>Résilience post-traumatique</strong> — Les patients intégrant le tadaburr dans leur parcours de guérison post-traumatique rapportent un sentiment de cohérence (Antonovsky) significativement plus élevé et une meilleure intégration narrative de l&#39;événement traumatique (Hodge &amp; Zidan, 2022).</li>
      </ul>

      <Callout variant="info" title="📚 Pour Approfondir">
        Pour une exploration approfondie des fondements scientifiques du Tadaburr Thérapeutique, nous recommandons la lecture des ouvrages suivants : <em>Spiritually Integrated Psychotherapy</em> de P. S. Richards (2019), <em>How God Changes Your Brain</em> d&#39;A. Newberg et M. R. Waldman (2009), <em>Religion and Mental Health</em> de H. G. Koenig (2018), ainsi que la thèse de doctorat de S. Achour sur les effets neurobiologiques du dhikr (Université de Strasbourg, 2020).
      </Callout>

      <OrnamentDivider />

      {/* ======================================================= */}
      {/* CHAPTER 2: Indications & Contre-indications             */}
      {/* ======================================================= */}
      <h2 style={styles.h2}>Chapitre 2 : Indications &amp; Contre-indications</h2>

      <h3 style={styles.h3}>Qui Peut Bénéficier ?</h3>
      <p style={styles.p}>
        Le Tadaburr Thérapeutique s&#39;adresse à un large éventail de profils cliniques, pourvu que certaines conditions préalables soient remplies (stabilité clinique minimale, motivation personnelle, absence de psychose active). Voici les profils pour lesquels cette approche a démontré une efficacité particulière :
      </p>
      <BookTable
        headers={['Profil', 'Indication Principale', 'Adaptabilité']}
        rows={[
          ['Adulte musulman (18-65 ans)', 'Anxiété généralisée, trouble d\'adaptation', 'Excellente — protocole standard'],
          ['Adolescent musulman (14-17 ans)', 'Troubles du comportement, anxiété scolaire', 'Bonne — adaptation langagière et rythme'],
          ['Femme en période périnatale', 'Baby blues, anxiété maternelle', 'Excellente — versets spécifiques de réconfort'],
          ['Patient traumatisé (ESPT stabilisé)', 'Intégration post-traumatique', 'Bonne — avec cadre de sécurité renforcé'],
          ['Patient dépressif léger à modéré', 'Dépression récurrente, dysthymie', 'Bonne — axer sur le sens et le ridā'],
          ['Patient en deuil', 'Deuil compliqué, perte significative', 'Excellente — versets de patience et d\'espoir'],
          ['Patient souffrant d\'addiction (abstinent)', 'Maintien de l\'abstinence, prévention rechute', 'Modérée — en complément d\'un suivi addictologique'],
          ['Professionnel en burn-out', 'Épuisement professionnel, perte de sens', 'Excellente — reconnecter au sens profond'],
          ['Personne âgée musulmane', 'Isolement, anxiété existentielle', 'Bonne — adapté au rythme et à la fatigabilité'],
        ]}
      />

      <h3 style={styles.h3}>Quand Rediriger Impérativement ?</h3>
      <Callout variant="danger" title="🚨 Signaux d'Alerte — Redirection Obligatoire">
        <div>
          <ul style={{ paddingLeft: '1.25rem', lineHeight: 1.8, margin: 0 }}>
            <li style={{ marginBottom: '0.5rem' }}>🔴 <strong>Psychose active ou trouble bipolaire en phase maniaque</strong> — Le travail spirituel peut exacerber les symptômes délirants ou grandioses. Rediriger vers un psychiatre pour stabilisation médicamenteuse avant toute intervention.</li>
            <li style={{ marginBottom: '0.5rem' }}>🔴 <strong>Idéation suicidaire active</strong> — Le tadaburr ne constitue pas une intervention de crise. Évaluer immédiatement le risque suicidaire et orienter vers les urgences psychiatriques.</li>
            <li style={{ marginBottom: '0.5rem' }}>🔴 <strong>Trouble dissociatif non stabilisé</strong> — L&#39;immersion méditative peut aggraver la dissociation. Stabiliser d&#39;abord avec des techniques d&#39;ancrage avant d&#39;envisager le tadaburr.</li>
            <li style={{ marginBottom: '0.5rem' }}>🔴 <strong>Trouble de la conduite alimentaire sévère</strong> — Le rapport au corps nécessite un abord spécialisé. Le tadaburr peut être introduit en phase tardive uniquement, sous supervision psychiatrique.</li>
            <li style={{ marginBottom: '0.5rem' }}>🔴 <strong>Antécédent de dérive sectaire</strong> — Le cadre spirituel peut réactiver des vulnérabilités. Travailler en collaboration étroite avec un thérapeute référent et introduire le cadre avec une extrême prudence.</li>
            <li style={{ marginBottom: '0.5rem' }}>🔴 <strong>Refus explicite de la dimension spirituelle</strong> — Le consentement éclairé est non négociable. Ne jamais imposer un contenu coranique à un patient qui ne le souhaite pas.</li>
            <li style={{ marginBottom: '0.5rem' }}>🔴 <strong>Personnalité rigide et littéraliste</strong> — Un rapport fondamentaliste au texte coranique peut transformer le tadaburr en rumination anxieuse. Évaluer la souplesse d&#39;interprétation avant d&#39;engager le protocole.</li>
            <li style={{ marginBottom: '0.5rem' }}>🔴 <strong>Intoxication ou sevrage aigu</strong> — La capacité de concentration et de symbolisation est altérée. Attendre la stabilisation neurobiologique avant toute intervention.</li>
          </ul>
        </div>
      </Callout>

      <h3 style={styles.h3}>Quand Utiliser EN COMPLÉMENT ?</h3>
      <p style={styles.p}>Le Tadaburr Thérapeutique peut être intégré comme outil complémentaire dans les contextes suivants :</p>
      <ul style={styles.bulletList}>
        <li style={styles.bulletItem}>✅ <strong>Avec la TCC</strong> — Utiliser le verset coranique comme support de restructuration cognitive (Phase 2 : Tajalli). Le patient compare ses pensées automatiques avec la perspective coranique, favorisant un reframing en cohérence avec son identité spirituelle.</li>
        <li style={styles.bulletItem}>✅ <strong>Avec l&#39;EMDR</strong> — Introduire le tadaburr en phase de ressource (Phase 2 du protocole EMDR standard) pour renforcer les ressources internes du patient. Le verset devient une « ressource spirituelle » que le patient peut activer pendant la désensibilisation.</li>
        <li style={styles.bulletItem}>✅ <strong>Avec la thérapie systémique familiale</strong> — Proposer des exercices de tadaburr familial lors des phases d&#39;apaisement, pour créer un espace de partage spirituel au sein de la famille et renforcer les liens affectifs.</li>
        <li style={styles.bulletItem}>✅ <strong>Avec la psychothérapie existentielle</strong> — Le tadaburr offre un horizon de sens spirituel qui enrichit la quête existentielle. Les versets sur l&#39;épreuve, la confiance et l&#39;espoir résonnent particulièrement avec les questions de mortalité, de liberté et d&#39;engagement.</li>
        <li style={styles.bulletItem}>✅ <strong>Avec les thérapies somatiques (SE, EFT)</strong> — Utiliser le dhikr comme outil de régulation neurovégétative pendant ou après les séances de libération somatique. La vibration de la récitation active le nerf vague et favorise le retour à l&#39;équilibre parasympathique.</li>
      </ul>

      <OrnamentDivider />

      {/* ======================================================= */}
      {/* CHAPTER 3: Les 4 Phases Thérapeutiques                 */}
      {/* ======================================================= */}
      <h2 style={styles.h2}>Chapitre 3 : Les 4 Phases Thérapeutiques</h2>

      <p style={styles.p}>
        Le Tadaburr Thérapeutique se déploie selon quatre phases distinctes, inspirées de la tradition spirituelle islamique et traduites dans le langage clinique contemporain. Chaque phase a une fonction thérapeutique spécifique, et leur enchaînement progressif permet au patient de parcourir un chemin de transformation en douceur et en sécurité.
      </p>

      <BookTable
        headers={['Phase', 'Terme Arabe', 'Fonction Thérapeutique', 'Équivalent Occidental']}
        rows={[
          [
            <span key="p1"><strong style={{ color: goldLight }}>Phase 1 : Fana</strong><br /><span style={{ fontSize: '0.82rem', color: textMuted }}>« L&#39;effacement du bruit »</span></span>,
            <span key="a-fana" style={{ fontStyle: 'italic', color: gold }}>فناء</span>,
            'Anesthésie de l&#39;hyperactivité mentale. Le patient apprend à observer ses pensées sans s&#39;y identifier, à distance du flux mental incessant. Le dhikr répétitif (subḥānallāh, al-ḥamdu lillāh, allāhu akbar) sert de point d&#39;ancrage sensoriel qui capte l&#39;attention et relâche progressivement la rumination.',
            'Relaxation progressive, hypnose Ericksonienne, respiration diaphragmatique — toutes les techniques visant la régulation neurovégétative et la réduction de l&#39;arousal.',
          ],
          [
            <span key="p2"><strong style={{ color: goldLight }}>Phase 2 : Tajalli</strong><br /><span style={{ fontSize: '0.82rem', color: textMuted }}>« L&#39;épiphanie du sens »</span></span>,
            <span key="a-tajalli" style={{ fontStyle: 'italic', color: gold }}>تجلي</span>,
            'Le verset coranique est lu, relu et médité jusqu&#39;à ce qu&#39;un « éclair de compréhension » se produise. Le patient identifie les résistances cognitives, les schémas limitants et les croyances dysfonctionnelles à travers le prisme du texte sacré. Le thérapeute accompagne ce processus de découverte avec des questions ouvertes et bienveillantes.',
            'Reframing cognitif (Beck), restructuration des schémas (Young), thérapie narrative — le patient découvre une nouvelle histoire possible à travers le verset.',
          ],
          [
            <span key="p3"><strong style={{ color: goldLight }}>Phase 3 : Munājāt</strong><br /><span style={{ fontSize: '0.82rem', color: textMuted }}>« Le dialogue intime »</span></span>,
            <span key="a-munajat" style={{ fontStyle: 'italic', color: gold }}>مناجاة</span>,
            'Le patient est invité à formuler personnellement sa réponse au verset — non pas comme une récitation formelle, mais comme un dialogue intime avec le Divin. Ce dialogue peut prendre la forme d&#39;une supplication (duʿāʾ), d&#39;une complainte, d&#39;une question, d&#39;un silence... L&#39;essentiel est l&#39;authenticité émotionnelle et la vulnérabilité spirituelle.',
            'Thérapie focalisée sur les émotions (Greenberg), dialogue interne (Gestalt), écriture thérapeutique — le patient donne voix à sa vérité intérieure dans un cadre contenant et sacré.',
          ],
          [
            <span key="p4"><strong style={{ color: goldLight }}>Phase 4 : Béance</strong><br /><span style={{ fontSize: '0.82rem', color: textMuted }}>« La fêlure qui donne la lumière »</span></span>,
            <span key="a-beance" style={{ fontStyle: 'italic', color: gold }}>وقفات التأمل</span>,
            'Moment de silence et d&#39;accueil de ce qui émerge après le dialogue intime. Le patient est invité à rester dans cette ouverture sans chercher à la combler, à la nommer ou à la fuir. C&#39;est dans cette béance que peut se produire la véritable intégration — le moment où la blessure rencontre la lumière de la miséricorde divine et se transforme en sagesse.',
            'Acceptation radicale (ACT), laissant-être (mindfulness), intégration EMDR — le patient accueille la réalité telle qu&#39;elle est, sans résistance ni fuite.',
          ],
        ]}
      />

      <h3 style={styles.h3}>Comment Adapter Selon la Pathologie</h3>
      <p style={styles.p}>
        La proportion et l&#39;emphase accordées à chaque phase doivent être adaptées au profil clinique du patient. Le tableau suivant propose des recommandations personnalisées :
      </p>
      <BookTable
        headers={['Profil du Patient', 'Phase Dominante', 'Phase à Alléger', 'Phase à Raccourcir']}
        rows={[
          [
            <span key="a1"><strong>Patient hyperactif / anxieux</strong></span>,
            <span key="d-fana"><strong style={{ color: goldLight }}>Fana (Phase 1)</strong><br />Renforcer l&#39;ancrage et le calme intérieur. Prévoir 8 à 12 minutes de dhikr avant d&#39;introduire le verset.</span>,
            <span key="d-m1" style={{ color: red }}>Munājāt (Phase 3)<br />Le dialogue intime peut raviver l&#39;anxiété si le patient n&#39;est pas suffisamment stabilisé.</span>,
            <span key="d-s1">Béance (Phase 4)<br />Le silence prolongé peut être source d&#39;inconfort pour un patient anxieux.</span>,
          ],
          [
            <span key="a2"><strong>Patient défensif / intellectualisant</strong></span>,
            <span key="d-tajalli"><strong style={{ color: goldLight }}>Tajalli (Phase 2)</strong><br />Utiliser le verset comme miroir cognitif pour contourner les mécanismes de défense intellectuels.</span>,
            <span key="d-m2"><span style={{ color: red }}>Fana (Phase 1)</span><br />Le patient peut utiliser le dhikr comme nouvelle forme de contrôle mental.</span>,
            'Munājāt (Phase 3)<br />Peut être difficile d\'emblée — introduire progressivement avec des invocations guidées.',
          ],
          [
            <span key="a3"><strong>Patient ruminant / dépressif</strong></span>,
            <span key="d-beance"><strong style={{ color: goldLight }}>Béance (Phase 4)</strong><br />Apprendre à accueillir les émotions sans rumination, en cultivant la présence au moment présent.</span>,
            '<span style={{ color: red }}>Tajalli (Phase 2)</span><br />L&#39;analyse cognitive peut alimenter la rumination si elle n\'est pas encadrée.',
            'Fana (Phase 1)<br />Un dhikr trop long peut devenir un mécanisme d\'évitement.',
          ],
          [
            <span key="a4"><strong>Patient dépressif / apathique</strong></span>,
            <span key="d-munajat"><strong style={{ color: goldLight }}>Munājāt (Phase 3)</strong><br />Stimuler l&#39;expression émotionnelle et le dialogue avec le Divin pour sortir de l&#39;anesthésie affective.</span>,
            'Fana (Phase 1)<br />Peut renforcer l\'apathie si la durée n\'est pas ajustée.',
            'Tajalli (Phase 2)<br />Peut sembler trop intellectuel — privilégier l\'expérience émotionnelle directe.',
          ],
        ]}
      />

      <OrnamentDivider />

      {/* ======================================================= */}
      {/* CHAPTER 4: Outils du Thérapeute                         */}
      {/* ======================================================= */}
      <h2 style={styles.h2}>Chapitre 4 : Outils du Thérapeute</h2>

      <h3 style={styles.h3}>Fiche d&#39;Évaluation Pré-Thérapeutique</h3>
      <p style={styles.p}>
        Avant toute première séance de Tadaburr Thérapeutique, le thérapeute doit remplir cette fiche d&#39;évaluation avec le patient. Elle permet d&#39;évaluer la pertinence de l&#39;approche, d&#39;identifier les contre-indications et d&#39;adapter le protocole au profil du patient.
      </p>

      <ExerciseBox label="Fiche d'Évaluation — À remplir avec le patient">
        <table style={styles.formTable}>
          <tbody>
            <tr>
              <td style={styles.formLabel}>📅 Date</td>
              <td style={styles.formCell}>
                <input
                  type="date"
                  style={styles.input}
                />
              </td>
            </tr>
            <tr>
              <td style={styles.formLabel}>👤 Nom du patient</td>
              <td style={styles.formCell}>
                <input
                  type="text"
                  placeholder="Nom et prénom"
                  style={styles.input}
                />
              </td>
            </tr>
            <tr>
              <td style={styles.formLabel}>📋 Motif de consultation</td>
              <td style={styles.formCell}>
                <textarea
                  placeholder="Décrivez brièvement les raisons qui vous amènent à consulter aujourd'hui..."
                  style={styles.textarea}
                />
              </td>
            </tr>
            <tr>
              <td style={styles.formLabel}>
                ⚖️ Gravité perçue
                <br />
                <span style={{ fontWeight: 400, fontSize: '0.8rem', color: '#666' }}>0 = aucune, 10 = insupportable</span>
              </td>
              <td style={styles.formCell}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <input
                    type="range"
                    min="0"
                    max="10"
                    defaultValue="5"
                    style={{ flex: 1, accentColor: goldDark }}
                  />
                  <span style={{
                    fontWeight: 700,
                    color: goldDark,
                    fontSize: '1.1rem',
                    minWidth: '2rem',
                    textAlign: 'center',
                  }}>5</span>
                </div>
              </td>
            </tr>
            <tr>
              <td style={styles.formLabel}>
                🏠 Stabilité actuelle
                <br />
                <span style={{ fontWeight: 400, fontSize: '0.8rem', color: '#666' }}>0 = très instable, 10 = très stable</span>
              </td>
              <td style={styles.formCell}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <input
                    type="range"
                    min="0"
                    max="10"
                    defaultValue="5"
                    style={{ flex: 1, accentColor: goldDark }}
                  />
                  <span style={{
                    fontWeight: 700,
                    color: goldDark,
                    fontSize: '1.1rem',
                    minWidth: '2rem',
                    textAlign: 'center',
                  }}>5</span>
                </div>
              </td>
            </tr>
            <tr>
              <td style={styles.formLabel}>
                💡 Motivation
                <br />
                <span style={{ fontWeight: 400, fontSize: '0.8rem', color: '#666' }}>0 = aucune, 10 = très motivé(e)</span>
              </td>
              <td style={styles.formCell}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <input
                    type="range"
                    min="0"
                    max="10"
                    defaultValue="5"
                    style={{ flex: 1, accentColor: goldDark }}
                  />
                  <span style={{
                    fontWeight: 700,
                    color: goldDark,
                    fontSize: '1.1rem',
                    minWidth: '2rem',
                    textAlign: 'center',
                  }}>5</span>
                </div>
              </td>
            </tr>
            <tr>
              <td style={styles.formLabel}>💊 Thérapies antérieures</td>
              <td style={styles.formCell}>
                <textarea
                  placeholder="Avez-vous déjà suivi une psychothérapie ? Si oui, quelle approche et avec quel résultat ?"
                  style={styles.textarea}
                />
              </td>
            </tr>
            <tr>
              <td style={styles.formLabel}>🕌 Spiritualité actuelle</td>
              <td style={styles.formCell}>
                <select style={styles.select}>
                  <option value="">-- Sélectionner --</option>
                  <option value="pratiquant-regulier">Pratiquant(e) régulier(ère) (prière quotidienne, dhikr fréquent)</option>
                  <option value="pratiquant-occasionnel">Pratiquant(e) occasionnel(le) (prière irrégulière, quelques dhikr)</option>
                  <option value="croyant-non-pratiquant">Croyant(e) mais peu pratiquant(e)</option>
                  <option value="recherche-spirituelle">En recherche spirituelle / questionnement</option>
                  <option value="non-musulman">Non musulman(e) mais intéressé(e) par l&apos;approche</option>
                  <option value="sans-spiritualite">Sans affiliation spirituelle particulière</option>
                </select>
              </td>
            </tr>
          </tbody>
        </table>
      </ExerciseBox>

      <h3 style={styles.h3}>Script de Première Séance Type</h3>
      <Callout variant="info" title="📖 Consigne pour le Thérapeute">
        Ce script est un guide indicatif, non un texte à lire mot à mot. Adaptez-le à votre style personnel, au profil du patient et au contexte de la séance. L&#39;essentiel est de créer un cadre contenant, bienveillant et respectueux de la dimension spirituelle du patient. Veillez à obtenir un consentement éclairé avant d&#39;introduire tout contenu coranique.
      </Callout>

      <QuoteBlock cite="Script de première séance — Guide indicatif">
        « Bienvenue. Je suis heureux/heureuse de vous accompagner aujourd&#39;hui. Avant que nous commencions, j&#39;aimerais vous expliquer comment nous allons travailler ensemble. L&#39;approche que je vous propose s&#39;appelle le Tadaburr Thérapeutique. Elle part d&#39;un principe simple : dans la tradition islamique, le Coran est décrit comme une « guérison et une miséricorde pour les croyants » (S.17, v.82). Notre travail consistera à méditer ensemble certains versets du Coran, non pas comme une leçon de religion, mais comme un espace de rencontre entre votre intériorité et la sagesse du texte. Vous n&#39;avez pas besoin d&#39;être un(e) expert(e) en religion pour en bénéficier. Ce qui compte, c&#39;est votre ouverture intérieure et votre honnêteté envers vous-même. Le texte deviendra un miroir : il vous montrera ce que vous portez en vous, vos peurs, vos espoirs, vos blessures — et ensemble, nous regarderons ce qui s&#39;y reflète. Est-ce que cela vous convient ? Avez-vous des questions ? »
      </QuoteBlock>

      <h3 style={styles.h3}>Gestion des Difficultés en Séance</h3>
      <p style={styles.p}>
        Même avec une préparation minutieuse, des difficultés peuvent survenir en cours de séance. Le tableau ci-dessous récapitule les situations les plus fréquentes et les interventions recommandées :
      </p>
      <BookTable
        headers={['Situation', 'Intervention Recommandée']}
        rows={[
          [
            <span key="s1"><strong>Le patient pleure abondamment</strong></span>,
            'Ne pas intervenir immédiatement. Laisser l\'émotion se déployer. Après 2-3 minutes, dire doucement : « Prenez tout le temps dont vous avez besoin. Ce que vous ressentez est légitime et bienvenu dans cet espace. » Proposer un verre d\'eau si nécessaire. Revenir au verset uniquement quand le patient est prêt.',
          ],
          [
            <span key="s2"><strong>Le patient se met en colère contre le verset</strong></span>,
            'Accueillir la colère comme une réaction authentique et thérapeutiquement significative. Dire : « Je remarque que ce verset provoque en vous une forte réaction. C\'est important. Que vous dit cette colère ? » Explorer le sens de la résistance sans chercher à la dissuader. La colère contre le texte est souvent le signe d\'une blessure profonde qui demande à être entendue.',
          ],
          [
            <span key="s3"><strong>Le patient se dissocie</strong></span>,
            'Interrompre immédiatement le processus de tadaburr. Proposer des exercices d\'ancrage sensoriel : « Regardez autour de vous et nommez 5 objets que vous voyez. Touchez la chaise et sentez sa texture. Écoutez les bruits de la pièce. » Revenir au corps avant de reprendre ou de reporter la séance.',
          ],
          [
            <span key="s4"><strong>Le patient interprète le verset de façon littéraliste et rigide</strong></span>,
            'Ne pas contester l\'interprétation mais ouvrir l\'espace des possibles : « C\'est une lecture valide de ce verset. Et si nous essayions de le regarder sous un autre angle ? Parfois, les versets ont plusieurs couches de sens, comme les vagues de l\'océan... » Proposer une métaphore ou une parabole pour contourner la rigidité interprétative.',
          ],
          [
            <span key="s5"><strong>Le patient dit « je ne ressens rien »</strong></span>,
            'Normaliser l\'expérience : « C\'est tout à fait possible, surtout dans les premières séances. L\'essentiel n\'est pas de ressentir quelque chose de spectaculaire, mais de rester présent avec ce qui est — y compris le vide ou la neutralité. Ce vide lui-même peut être porteur de sens. » Pursuivre sans pression.',
          ],
          [
            <span key="s6"><strong>Le patient veut quitter la séance</strong></span>,
            'Respecter le choix du patient sans le culpabiliser : « Vous avez tout à fait le droit de prendre une pause. Ce que nous traversons peut être intense. » Proposer de reprendre à un autre moment. Évaluer lors de la séance suivante si le protocole doit être ajusté ou si une redirection est nécessaire.',
          ],
        ]}
      />

      <ArabicVerse
        arabic="وَنُنَزِّلُ مِنَ ٱلْقُرْءَانِ مَا هُوَ شِفَآءٌ وَرَحْمَةٌ لِّلْمُؤْمِنِينَ ۗ وَلَا يَزِيدُ ٱلظَّـٰلِمِينَ إِلَّا خَسَارًا"
        translation="Et Nous faisons descendre du Coran ce qui est guérison et miséricorde pour les croyants. Cependant, cela ne fait qu'accroître la perte des injustes."
        reference="Sourate Al-Isrâ' (17), verset 82"
      />

      <OrnamentDivider />

      <div style={{ textAlign: 'center', padding: '1rem 0 2rem', color: textMuted, fontSize: '0.85rem' }}>
        <p>Fin de la Partie I — Fondations Thérapeutiques</p>
        <p style={{ marginTop: '0.5rem' }}>✦ ✦ ✦</p>
      </div>
    </BookPage>
  );
}
