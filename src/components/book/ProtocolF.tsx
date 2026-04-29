'use client';

import React from 'react';
import ProtocolHeader from './ProtocolHeader';
import ProtocolBody from './ProtocolBody';
import Callout from './Callout';
import QuoteBlock from './QuoteBlock';
import ArabicVerse from './ArabicVerse';
import BookTable from './BookTable';
import MeditationTimer from './MeditationTimer';
import MirrorQuestion from './MirrorQuestion';
import MunajatTextarea from './MunajatTextarea';
import ExerciseBox from './ExerciseBox';
import OrnamentDivider from './OrnamentDivider';

export default function ProtocolF() {
  return (
    <div>
      <ProtocolHeader
        number="F"
        title="Protocole F : Deuil & Perte"
        subtitle="La Mer de l'Âme — Naviguer les Eaux de la Séparation"
      />

      <ProtocolBody>
        {/* Indications */}
        <section style={{ marginBottom: '2rem' }}>
          <h3 style={{
            fontFamily: '"Amiri", serif',
            fontSize: '1.15rem',
            color: '#D4AF37',
            marginBottom: '0.75rem',
          }}>
            📋 Indications
          </h3>
          <ul style={{
            listStyle: 'none',
            padding: 0,
            margin: 0,
            display: 'flex',
            flexDirection: 'column',
            gap: '0.4rem',
          }}>
            {[
              'Deuil d\'un être cher (décès, disparition, séparation définitive)',
              'Perte symbolique : emploi, maison, pays, identité sociale',
              'Deuil périnatal et fausse couche',
              'Deuil non reconnu ou interdit (relations difficiles, suicide, addiction)',
              'Syndrome de deuil compliqué et deuil gelé',
              'Deuil anticipatoire face à une maladie terminale',
              'Effondrement de sens et crise existentielle consécutive à une perte',
              'Difficulté à dire adieu et attachement prolongé',
            ].map((item, i) => (
              <li key={i} style={{
                display: 'flex',
                alignItems: 'baseline',
                gap: '0.5rem',
                fontSize: '0.9rem',
                color: '#E8E4DC',
                lineHeight: 1.6,
              }}>
                <span style={{ color: '#C9A227', fontSize: '0.7rem', flexShrink: 0 }}>◆</span>
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* Safety callout */}
        <section style={{ marginBottom: '2rem' }}>
          <Callout variant="danger" title="Consigne de sécurité — Deuil et santé mentale">
            <p style={{ margin: '0 0 0.5rem 0' }}>
              <strong>Signes d&apos;alerte nécessitant une orientation spécialisée :</strong>
            </p>
            <ul style={{ margin: 0, paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
              <li>Idéation suicidaire — évaluation immédiate du risque et mise en sécurité</li>
              <li>Deuil compliqué avec culpabilité envahissante persistant au-delà de 6 mois</li>
              <li>Dissociation sévère, dépersonnalisation ou déréalisation</li>
              <li>Retrait social total et incapacité à maintenir les activités quotidiennes</li>
            </ul>
          </Callout>
        </section>

        {/* Objective */}
        <section style={{ marginBottom: '2rem' }}>
          <QuoteBlock cite="Objectif clinique du Protocole F">
            Accompagner le patient à travers les eaux du deuil sans chercher
            à le traverser trop vite. Le deuil n&apos;est pas un problème à résoudre —
            c&apos;est un sacrement de l&apos;âme, un passage obligé. La tradition islamique
            enseigne que les larmes sont une prière silencieuse que Dieu écoute
            toujours. Ce protocole offre un espace pour pleurer, pour se souvenir,
            pour dire adieu — à sa propre rythme, avec Dieu comme témoin et compagnon.
          </QuoteBlock>
        </section>

        {/* Duration table */}
        <section style={{ marginBottom: '2rem' }}>
          <h3 style={{
            fontFamily: '"Amiri", serif',
            fontSize: '1.15rem',
            color: '#D4AF37',
            marginBottom: '0.75rem',
          }}>
            ⏱ Durée du Protocole
          </h3>
          <BookTable
            headers={['Phase', 'Durée', 'Sessions', 'Fréquence']}
            rows={[
              ['Évaluation du deuil', '1 sem.', '1', 'Hebdomadaire'],
              ['Fana Clinique', '5 min/séance', '1–2', 'Hebdomadaire'],
              ['Tajalli Clinique', '15 min/séance', '2–4', 'Hebdomadaire'],
              ['Munajat Clinique', '10 min/séance', '2–4', 'Hebdomadaire'],
              ['Béance Clinique', '10 min/séance', '1–2', 'Hebdomadaire'],
              ['Intégration', 'Variable', '1', 'Bimensuelle'],
              ['Total estimé', '', '7–12', ''],
            ]}
          />
        </section>

        <OrnamentDivider />

        {/* Key verses */}
        <section style={{ marginBottom: '2rem' }}>
          <h3 style={{
            fontFamily: '"Amiri", serif',
            fontSize: '1.15rem',
            color: '#D4AF37',
            marginBottom: '1rem',
            textAlign: 'center',
          }}>
            📖 Versets Clés
          </h3>

          <ArabicVerse
            arabic="كُلُّ نَفۡسٖ ذَآئِقَةُ ٱلۡمَوۡتِ ثُمَّ إِلَيۡنَا تُرۡجَعُونَ"
            translation="Toute âme goûtera à la mort. Puis c'est à Nous que vous serez ramenés."
            reference="Al-Ankabut 29:57"
          />

          <ArabicVerse
            arabic="وَبَشِّرِ ٱلصَّٰبِرِينَ ٱلَّذِينَ إِذَآ أَصَٰبَتۡهُم مُّصِيبَةٞ قَالُوٓاْ إِنَّا لِلَّهِ وَإِنَّآ إِلَيۡهِ رَٰجِعُونَ"
            translation="Annonce la bonne nouvelle à ceux qui sont patients, qui disent, lorsqu'une épreuve les frappe : 'Nous appartenons à Dieu et à Lui nous retournerons.'"
            reference="Al-Baqarah 2:155-156"
          />

          <ArabicVerse
            arabic="وَلَا تَيۡـَٔسُوٓاْ مِن رَّوۡحِ ٱللَّهِ إِنَّهُ لَا يَيۡـَٔسُ مِن رَّوۡحِ ٱللَّهِ إِلَّا ٱلۡقَوۡمُ ٱلۡكَٰفِرُونَ"
            translation="Ne désespérez pas de la miséricorde de Dieu. Ce n'est que les gens mécréants qui désespèrent de Sa miséricorde."
            reference="Yusuf 12:87"
          />
        </section>

        <OrnamentDivider />

        {/* PHASE 1: Fana Clinique */}
        <section style={{ marginBottom: '2.5rem' }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.6rem',
            marginBottom: '1rem',
          }}>
            <span style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #C9A227, #8B6914)',
              color: '#0D1117',
              fontWeight: 800,
              fontSize: '0.85rem',
            }}>1</span>
            <div>
              <h3 style={{
                fontFamily: '"Amiri", serif',
                fontSize: '1.15rem',
                color: '#D4AF37',
                margin: 0,
              }}>Phase 1 : Fana Clinique</h3>
              <p style={{
                fontSize: '0.82rem',
                color: '#9B9590',
                margin: 0,
                fontStyle: 'italic',
              }}>L&apos;Océan du Lâcher — 5 minutes</p>
            </div>
          </div>

          <p style={{
            fontSize: '0.92rem',
            lineHeight: 1.8,
            color: '#E8E4DC',
            marginBottom: '1rem',
          }}>
            Le deuil est comme un océan — vaste, profond, imprévisible.
            On ne traverse pas l&apos;océan en le combattant. On le traverse
            en apprenant à flotter. Cette phase est un enseignement de
            <em> lâcher prise actif</em> : accepter d&apos;être porté par les vagues
            au lieu de lutter contre elles.
          </p>

          <div style={{
            padding: '1.25rem',
            borderRadius: '10px',
            background: 'rgba(33, 45, 58, 0.5)',
            border: '1px solid rgba(201, 162, 39, 0.12)',
            marginBottom: '1rem',
          }}>
            <h4 style={{
              fontSize: '0.9rem',
              fontWeight: 700,
              color: '#C9A227',
              marginBottom: '0.75rem',
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
            }}>Technique : « Le Bateau sur l&apos;Océan »</h4>
            <ol style={{
              margin: 0,
              paddingLeft: '1.5rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.65rem',
            }}>
              {[
                'Fermez les yeux. Imaginez que vous êtes sur un petit bateau au milieu d\'un vaste océan. L\'eau est sombre, profonde, mais calme.',
                'Sentez le mouvement du bateau — il monte et descend avec les vagues. C\'est le mouvement du deuil. Ne résistez pas. Laissez le bateau porter.',
                'Regardez autour de vous. L\'océan s\'étend à perte de vue — comme la douleur peut sembler infinie. Mais l\'océan a des rives. Votre douleur aussi en aura.',
                'Au-dessus de vous, le ciel est vaste. Même dans la tempête, le ciel est toujours là — invisible parfois, mais toujours présent. Comme la Miséricorde divine.',
                'Posez vos mains sur votre cœur. Dites : « Je suis sur cette mer. Je ne sais pas quand je verrai la rive. Mais je ne suis pas seul(e) sur ce bateau. »',
                'Prenez 5 respirations lentes. À chaque expiration, imaginez une vague qui vous porte un peu plus loin vers la rive — même si vous ne la voyez pas encore.',
              ].map((step, i) => (
                <li key={i} style={{
                  fontSize: '0.88rem',
                  lineHeight: 1.7,
                  color: '#E8E4DC',
                  paddingLeft: '0.25rem',
                }}>
                  <span style={{ color: '#C9A227', fontWeight: 700, marginRight: '0.25rem' }}>{i + 1}.</span>
                  {step}
                </li>
              ))}
            </ol>
          </div>

          <MeditationTimer id="protF-phase1" initialSeconds={300} label="Phase 1 — Fana Clinique" />
        </section>

        <OrnamentDivider />

        {/* PHASE 2: Tajalli Clinique */}
        <section style={{ marginBottom: '2.5rem' }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.6rem',
            marginBottom: '1rem',
          }}>
            <span style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #C9A227, #8B6914)',
              color: '#0D1117',
              fontWeight: 800,
              fontSize: '0.85rem',
            }}>2</span>
            <div>
              <h3 style={{
                fontFamily: '"Amiri", serif',
                fontSize: '1.15rem',
                color: '#D4AF37',
                margin: 0,
              }}>Phase 2 : Tajalli Clinique</h3>
              <p style={{
                fontSize: '0.82rem',
                color: '#9B9590',
                margin: 0,
                fontStyle: 'italic',
              }}>La Sagesse dans la Séparation — 15 minutes</p>
            </div>
          </div>

          <p style={{
            fontSize: '0.92rem',
            lineHeight: 1.8,
            color: '#E8E4DC',
            marginBottom: '1rem',
          }}>
            Le miroir du deuil ne montre pas la perte — il montre ce que la perte
            <em> révèle</em>. L&apos;amour que nous portons à celui qui est parti ne meurt pas
            avec lui. Il se transforme. Cette phase invite le patient à contempler
            la relation avec la personne perdue non pas comme terminée, mais
            comme <em>transférée dans un autre registre</em> — celui de la présence spirituelle.
          </p>

          <MirrorQuestion question="Si la personne que j'ai perdue pouvait me parler maintenant depuis l'au-delà, que me dirait-elle ? Quelle est la chose la plus importante qu'elle voudrait que je sache ?" />

          <MeditationTimer id="protF-phase2" initialSeconds={900} label="Phase 2 — Tajalli Clinique" />
        </section>

        <OrnamentDivider />

        {/* PHASE 3: Munajat Clinique */}
        <section style={{ marginBottom: '2.5rem' }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.6rem',
            marginBottom: '1rem',
          }}>
            <span style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #C9A227, #8B6914)',
              color: '#0D1117',
              fontWeight: 800,
              fontSize: '0.85rem',
            }}>3</span>
            <div>
              <h3 style={{
                fontFamily: '"Amiri", serif',
                fontSize: '1.15rem',
                color: '#D4AF37',
                margin: 0,
              }}>Phase 3 : Munajat Clinique</h3>
              <p style={{
                fontSize: '0.82rem',
                color: '#9B9590',
                margin: 0,
                fontStyle: 'italic',
              }}>Le Dialogue avec le Cœur Brisé — 10 minutes</p>
            </div>
          </div>

          <p style={{
            fontSize: '0.92rem',
            lineHeight: 1.8,
            color: '#E8E4DC',
            marginBottom: '1rem',
          }}>
            La Munajat dans le deuil est peut-être la forme la plus pure
            de prière — car elle est <em>sans façade</em>. Le cœur brisé n&apos;a pas
            d&apos;énergie pour les formules. Il ne sait dire que la vérité nue :
            la douleur, le manque, la colère parfois contre Dieu, et l&apos;espoir
            fragile d&apos;une lumière au bout de la nuit.
          </p>

          <MunajatTextarea
            protocolName="Protocole F : Deuil & Perte"
            phaseName="Phase 3 : Munajat Clinique"
            id="protF-munajat"
            prompts={[
              { emoji: '🙏', text: 'Seigneur, accueille ceux que j\'ai perdus dans ta miséricorde...' },
              { emoji: '💧', text: 'Ma tristesse est le prix de mon amour pour...' },
              { emoji: '🕊️', text: 'Je trouve du réconfort dans...' },
              { emoji: '🌅', text: 'Même parti(e), cet être vit en moi à travers...' },
              { emoji: '🌱', text: 'J\'ouvre mon cœur à l\'espérance de...' },
            ]}
          />

          <MeditationTimer id="protF-phase3" initialSeconds={600} label="Phase 3 — Munajat Clinique" />
        </section>

        <OrnamentDivider />

        {/* PHASE 4: Béance Clinique */}
        <section style={{ marginBottom: '2.5rem' }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.6rem',
            marginBottom: '1rem',
          }}>
            <span style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #C9A227, #8B6914)',
              color: '#0D1117',
              fontWeight: 800,
              fontSize: '0.85rem',
            }}>4</span>
            <div>
              <h3 style={{
                fontFamily: '"Amiri", serif',
                fontSize: '1.15rem',
                color: '#D4AF37',
                margin: 0,
              }}>Phase 4 : Béance Clinique</h3>
              <p style={{
                fontSize: '0.82rem',
                color: '#9B9590',
                margin: 0,
                fontStyle: 'italic',
              }}>La Cérémonie des Adieux — 10 minutes</p>
            </div>
          </div>

          <p style={{
            fontSize: '0.92rem',
            lineHeight: 1.8,
            color: '#E8E4DC',
            marginBottom: '1rem',
          }}>
            Dire adieu n&apos;est pas oublier. C&apos;est transformer le lien physique
            en un lien spirituel. Dans la tradition islamique, ceux qui sont
            partis ne sont pas absents — ils sont dans un <em>état de proximité</em>
            que nous ne percevons plus avec nos sens, mais que le cœur peut
            encore ressentir.
          </p>

          <div style={{
            padding: '1.25rem',
            borderRadius: '10px',
            background: 'rgba(46, 139, 87, 0.06)',
            border: '1px solid rgba(46, 139, 87, 0.15)',
            marginBottom: '1rem',
          }}>
            <h4 style={{
              fontSize: '0.88rem',
              fontWeight: 700,
              color: '#2E8B57',
              marginBottom: '0.75rem',
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
            }}>Exercice : « La Lettre aux Deux Rives »</h4>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.65rem',
              fontSize: '0.88rem',
              lineHeight: 1.75,
              color: '#E8E4DC',
            }}>
              <p style={{ margin: 0 }}>
                <strong style={{ color: '#2E8B57' }}>Étape 1 :</strong> Prenez une feuille
                et un stylo. Écrivez une lettre à la personne que vous avez perdue.
                Dites-lui tout : ce que vous n&apos;avez pas pu dire, ce que vous
                regrettez, ce que vous êtes reconnaissant(e) d&apos;avoir vécu avec elle.
              </p>
              <p style={{ margin: 0 }}>
                <strong style={{ color: '#2E8B57' }}>Étape 2 :</strong> Puis écrivez
                la réponse que vous imaginez qu&apos;elle vous ferait — avec bienveillance,
                amour et sagesse. Laissez les mots venir naturellement.
              </p>
              <p style={{ margin: 0 }}>
                <strong style={{ color: '#2E8B57' }}>Étape 3 :</strong> Gardez cette lettre
                dans un endroit spécial. C&apos;est un pont entre les deux rives —
                celle-ci et celle de l&apos;au-delà. Un jour, vous la relirez et
                vous verrez à quel point vous avez avancé sur la mer du deuil.
              </p>
              <blockquote style={{
                margin: '0.5rem 0 0 0',
                padding: '0.75rem 1rem',
                borderLeft: '3px solid #2E8B57',
                background: 'rgba(46, 139, 87, 0.06)',
                borderRadius: '0 6px 6px 0',
                fontFamily: '"Amiri", serif',
                fontSize: '1.05rem',
                color: '#D4AF37',
                fontStyle: 'italic',
                lineHeight: 1.7,
              }}>
                « Inna lillahi wa inna ilayhi raji&apos;un — De Dieu nous venons
                et à Dieu nous retournons. Ce qui est à Dieu ne peut jamais
                être véritablement perdu. »
              </blockquote>
            </div>
          </div>

          <MeditationTimer id="protF-phase4" initialSeconds={600} label="Phase 4 — Béance Clinique" />
        </section>

        <OrnamentDivider />

        {/* Post-session exercise */}
        <section style={{ marginBottom: '2rem' }}>
          <ExerciseBox label="Exercice Post-Séance — Le Jardin du Souvenir">
            <p style={{ margin: '0 0 0.75rem 0' }}>
              Le deuil n&apos;a pas de calendrier. Mais un jardin, si — et c&apos;est
              un calendrier vivant :
            </p>
            <ol style={{
              margin: 0,
              paddingLeft: '1.25rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.5rem',
            }}>
              <li>
                <strong style={{ color: '#C9A227' }}>Chaque jour (2 min) :</strong>
                Allumez une bougie ou tenez un objet qui vous relie à la personne
                perdue. Restez en silence. Ressentez sa présence. Laissez les
                émotions venir et repartir comme des nuages.
              </li>
              <li>
                <strong style={{ color: '#C9A227' }}>Une fois par semaine :</strong>
                Écrivez dans votre journal un souvenir heureux avec cette personne.
                Le deuil a besoin de douceur pour guérir. Les souvenirs joyeux
                sont la nourriture du cœur en deuil.
              </li>
              <li>
                <strong style={{ color: '#C9A227' }}>Munajat mensuelle :</strong>
                Écrivez une prière pour la personne perdue. Dans l&apos;Islam,
                la prière pour les défunts les accompagne et les bénéficie.
                Votre amour ne s&apos;arrête pas à la mort — il continue par la prière.
              </li>
            </ol>
            <p style={{ margin: '0.75rem 0 0 0', fontSize: '0.85rem', color: '#9B9590', fontStyle: 'italic' }}>
              💡 Note au praticien : Le deuil ne guérit pas — il s&apos;intègre.
              Votre rôle n&apos;est pas de faire disparaître la douleur, mais
              d&apos;aider le patient à <em>vivre avec</em> de manière à ce que
              la perte devienne un point de profondeur, pas un point d&apos;arrêt.
            </p>
          </ExerciseBox>
        </section>
      </ProtocolBody>
    </div>
  );
}
