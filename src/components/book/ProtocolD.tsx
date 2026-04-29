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
import PromptChips from './PromptChips';
import ExerciseBox from './ExerciseBox';
import OrnamentDivider from './OrnamentDivider';

export default function ProtocolD() {
  return (
    <div>
      <ProtocolHeader
        number="D"
        title="Protocole D : Colère & Relationnel"
        subtitle="Le Miroir Relationnel — Transformer la Colère en Compassion"
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
              'Colère chronique et difficulté de régulation émotionnelle',
              'Rancœur persistante et incapacité à pardonner',
              'Jalousie pathologique et comparaison sociale',
              'Conflits relationnels récurrents (couple, famille, travail)',
              'Passivité-agressivité et communication conflictuelle',
              'Resentiment dans les relations interpersonnelles',
              'Agressivité verbale ou émotionnelle',
              'Blessures relationnelles non résolues',
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

        {/* Danger callout */}
        <section style={{ marginBottom: '2rem' }}>
          <Callout variant="danger" title="Consigne de sécurité — Violence active">
            <p style={{ margin: '0 0 0.5rem 0' }}>
              <strong>Si le patient présente des comportements violents actifs :</strong>
            </p>
            <ul style={{ margin: 0, paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
              <li>Violence physique envers autrui — <strong>sécuriser d&apos;abord</strong>, orienter vers structures spécialisées</li>
              <li>Menaces de mort ou de violence grave — obligation légale de signalement</li>
              <li>Violence domestique avérée — protéger la victime, orienter le patient</li>
              <li>Destruction de biens ou auto-agressivité sévère</li>
            </ul>
            <p style={{ margin: '0.5rem 0 0 0', fontWeight: 600, color: '#DC2626' }}>
              → Ce protocole est conçu pour la colère <em>chronique non violente</em>,
              pas pour les situations de crise nécessitant une intervention d&apos;urgence.
            </p>
          </Callout>
        </section>

        {/* Objective */}
        <section style={{ marginBottom: '2rem' }}>
          <QuoteBlock cite="Objectif clinique du Protocole D">
            Transformer l&apos;énergie de la colère en force de compassion.
            Le miroir islamique enseigne que la colère est un voile sur le cœur
            qui empêche de voir la vérité de l&apos;autre — et de soi-même.
            Ce protocole utilise les quatre phases pour défaire progressivement
            ce voile, révélant la blessure sous la rage et la vulnérabilité
            sous l&apos;agressivité, jusqu&apos;à ce que le cœur puisse choisir
            le pardon non pas comme une obligation morale, mais comme un acte
            de libération intérieure.
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
              ['Évaluation relationnelle', '1 sem.', '1', 'Hebdomadaire'],
              ['Fana Clinique', '5 min/séance', '1–2', 'Hebdomadaire'],
              ['Tajalli Clinique', '15 min/séance', '2–3', 'Hebdomadaire'],
              ['Munajat Clinique', '10 min/séance', '2–3', 'Hebdomadaire'],
              ['Béance Clinique', '10 min/séance', '1–2', 'Hebdomadaire'],
              ['Intégration', 'Variable', '1', 'Bimensuelle'],
              ['Total estimé', '', '6–10', ''],
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
            arabic="ٱلَّذِينَ يُنفِقُونَ فِي ٱلسَّرَّآءِ وَٱلضَّرَّآءِ وَٱلۡكَٰظِمِينَ ٱلۡغَيۡظَ وَٱلۡعَافِينَ عَنِ ٱلنَّاسِۗ وَٱللَّهُ يُحِبُّ ٱلۡمُحۡسِنِينَ"
            translation="Ceux qui dépensent dans l'aisance comme dans l'adversité, qui dominent leur colère et qui pardonnent aux gens. Et Dieu aime les bienfaisants."
            reference="Al-Imran 3:134"
          />

          <ArabicVerse
            arabic="وَلَمَن صَبَرَ وَغَفَرَ ذَٰلِكَ لَمِنۡ عَزۡمِ ٱلۡأُمُورِ"
            translation="Mais quiconque pardonne et s'abstient, voilà qui fait partie des actes de noble caractère."
            reference="Ash-Shura 42:43"
          />

          <ArabicVerse
            arabic="وَٱسۡتَحۡفَظُواْ مِن فَضۡلِ ٱللَّهِ ۚ وَٱللَّهُ غَنِيٌّ حَلِيمٌ"
            translation="Et que la faveur de Dieu soit votre recherche. Dieu est Immense, Plein de douceur."
            reference="Al-Baqarah 2:250"
          />

          <ArabicVerse
            arabic="وَلَا تَسۡتَوِي ٱلۡحَسَنَةُ وَلَا ٱلسَّيِّئَةُ ۚ ٱدۡفَعۡ بِٱلَّتِي هِيَ أَحۡسَنُ"
            translation="Le bien et le mal ne sont pas égaux. Repousse le mal par ce qui est meilleur."
            reference="Fussilat 41:34"
          />

          <ArabicVerse
            arabic="وَإِن تَعۡفُواْ وَتَصۡفَحُواْ وَتَغۡفِرُواْ فَإِنَّ ٱللَّهَ غَفُورٞ رَّحِيمٞ"
            translation="Mais si vous pardonnez, vous êtes indulgents et si vous excusez, sachez que Dieu est Pardonneur, Miséricordieux."
            reference="At-Taghabun 64:14"
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
            }}>
              1
            </span>
            <div>
              <h3 style={{
                fontFamily: '"Amiri", serif',
                fontSize: '1.15rem',
                color: '#D4AF37',
                margin: 0,
              }}>
                Phase 1 : Fana Clinique
              </h3>
              <p style={{
                fontSize: '0.82rem',
                color: '#9B9590',
                margin: 0,
                fontStyle: 'italic',
              }}>
                Le Lâcher Préalable — 5 minutes
              </p>
            </div>
          </div>

          <p style={{
            fontSize: '0.92rem',
            lineHeight: 1.8,
            color: '#E8E4DC',
            marginBottom: '1rem',
          }}>
            Impossible de travailler la colère sans d&apos;abord relâcher la tension
            physique et émotionnelle qu&apos;elle accumule. Le corps du patient en colère
            est un corps armé — les épaules serrées, la mâchoire crispée, le ventre
            noué. Cette phase est un acte de <em>désarmement</em> volontaire,
            une soumission du corps à la Paix avant que le cœur puisse parler.
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
            }}>
              Technique : « Le Lâcher Préalable »
            </h4>
            <ol style={{
              margin: 0,
              paddingLeft: '1.5rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.65rem',
            }}>
              {[
                'Asseyez-vous. Avant de fermer les yeux, faites un scan de votre corps : où se loge la tension ? Mâchoire ? Épaules ? Poings ? Ventre ? Identifiez sans juger.',
                'Prenez une inspiration profonde et, sur l\'expiration, relâchez consciemment chaque zone tendue. Les épaules descendent. La mâchoire s\'entrouvre. Les poings s\'ouvrent. Le ventre se détend.',
                'Répétez 3 fois : « Je choisis de poser mes armes. Je suis en sécurité ici. Personne ne va m\'attaquer dans cet espace. »',
                'Imaginez que la colère en vous est un feu. Ne l\';éteignez pas par force — regardez-le brûler. Observez sa couleur, son intensité, son mouvement. C\'est un feu qui a besoin d\'être vu, pas combattu.',
                'Maintenant, visualisez de l\'eau douce qui coule doucement sur ce feu — pas pour l\'éteindre brutalement, mais pour le tempérer. Le feu devient chaleur, la chaleur devient tiédeur, la tiédeur devient paix.',
                'Quand vous vous sentez suffisamment relâché, prenez trois respirations lentes et ouvrez les yeux. Notez : la colère a-t-elle changé de forme ? D\'intensité ?',
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

          <MeditationTimer id="protD-phase1" initialSeconds={300} label="Phase 1 — Fana Clinique" />
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
            }}>
              2
            </span>
            <div>
              <h3 style={{
                fontFamily: '"Amiri", serif',
                fontSize: '1.15rem',
                color: '#D4AF37',
                margin: 0,
              }}>
                Phase 2 : Tajalli Clinique
              </h3>
              <p style={{
                fontSize: '0.82rem',
                color: '#9B9590',
                margin: 0,
                fontStyle: 'italic',
              }}>
                L&apos;Inversion du Miroir — 15 minutes
              </p>
            </div>
          </div>

          <p style={{
            fontSize: '0.92rem',
            lineHeight: 1.8,
            color: '#E8E4DC',
            marginBottom: '1rem',
          }}>
            Le miroir relationnel enseigne que la colère que nous ressentons
            envers autrui est souvent un reflet inversé de quelque chose en nous.
            Le Prophète ﷺ a dit : « Le fort n&apos;est pas celui qui vainc les gens
            par la force, mais le fort est celui qui se maîtrise dans la colère. »
            Cette phase invite le patient à retourner son miroir et à découvrir
            ce que sa colère révèle vraiment.
          </p>

          <h4 style={{
            fontSize: '0.88rem',
            fontWeight: 700,
            color: '#C9A227',
            margin: '1.25rem 0 0.75rem 0',
            textTransform: 'uppercase',
            letterSpacing: '0.06em',
          }}>
            Tableau d&apos;Inversion : Ce que la Colère Révèle
          </h4>

          <BookTable
            headers={['Type de colère', 'Manifestation', 'Ce que le miroir révèle', 'Vérité sous-jacente']}
            rows={[
              [
                'Colère explosive',
                'Éclats soudains, cris, mots blessants, objets jetés',
                'Un cœur qui n\'a jamais appris à demander de l\'aide. L\'explosion est un appel déguisé.',
                '« J\'ai besoin de soutien, de tendresse, d\'être entendu — mais je ne sais pas comment le demander. »',
              ],
              [
                'Colère rancunière',
                'Rancœur tenace, listes de griefs, refus de pardonner, réactivation du passé',
                'Une blessure non cicatrisée que l\'on nourrit faute de savoir comment la soigner.',
                '« J\'ai été blessé profondément et je n\'ai jamais eu le droit d\'exprimer cette douleur. »',
              ],
              [
                'Jalousie / Envie',
                'Comparaison compulsive, ressentiment du succès d\'autrui, sensation d\'injustice',
                'Un sentiment d\'insécurité fondamentale et de peur de ne pas suffire.',
                '« J\'ai peur de ne pas avoir de valeur. Le succès des autres me rappelle ce que je crois ne pas mériter. »',
              ],
              [
                'Colère passive-agressive',
                'Sarcasme, silence punitif, non-dits, « oublis » stratégiques',
                'Une voix étouffée qui n\'a pas le droit de parler directement — souvent par peur du conflit.',
                '« Je suis en colère mais je crois que ma colère n\'est pas légitime, alors je l\'exprime en secret. »',
              ],
              [
                'Colère dirigée contre Dieu',
                'Révolte spirituelle, abandon de la pratique, reproches à l\'égard du destin',
                'Une douleur existentielle que la raison ne peut pas résoudre — le cœur cherche un responsable.',
                '« J\'ai subi une injustice que je ne comprends pas, et je ne sais plus en qui avoir confiance. »',
              ],
            ]}
          />

          <MirrorQuestion question="Si la personne qui m'a mis en colère était un miroir, quelle partie de moi-même me renvoie-t-elle que je refuse de voir ? Quelle blessure se réveille en moi à travers cette colère ?" />

          <MeditationTimer id="protD-phase2" initialSeconds={900} label="Phase 2 — Tajalli Clinique" />
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
            }}>
              3
            </span>
            <div>
              <h3 style={{
                fontFamily: '"Amiri", serif',
                fontSize: '1.15rem',
                color: '#D4AF37',
                margin: 0,
              }}>
                Phase 3 : Munajat Clinique
              </h3>
              <p style={{
                fontSize: '0.82rem',
                color: '#9B9590',
                margin: 0,
                fontStyle: 'italic',
              }}>
                Le Dialogue de la Colère Honnête — 10 minutes
              </p>
            </div>
          </div>

          <p style={{
            fontSize: '0.92rem',
            lineHeight: 1.8,
            color: '#E8E4DC',
            marginBottom: '1rem',
          }}>
            La Munajat pour le patient en colère est un espace de <em>vérité brute</em>.
            Ici, il n&apos;est pas demandé au patient de pardonner immédiatement
            ni de minimiser sa souffrance. Il est invité à tout dire — la rage,
            l&apos;injustice ressentie, le désir de vengeance — car c&apos;est seulement
            quand la colère est entièrement exprimée dans un espace sacré
            qu&apos;elle peut commencer à se transformer.
          </p>

          <div style={{
            padding: '1rem 1.25rem',
            borderRadius: '8px',
            background: 'rgba(201, 162, 39, 0.04)',
            border: '1px solid rgba(201, 162, 39, 0.1)',
            marginBottom: '1rem',
          }}>
            <p style={{
              fontSize: '0.82rem',
              fontWeight: 700,
              color: '#C9A227',
              marginBottom: '0.5rem',
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
            }}>
              Exemple de dialogue — La Colère Honnête
            </p>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.65rem',
            }}>
              <div>
                <p style={{
                  fontSize: '0.85rem',
                  color: '#00D4FF',
                  margin: 0,
                  fontWeight: 600,
                }}>
                  ✦ Le cœur en colère parle :
                </p>
                <p style={{
                  fontSize: '0.88rem',
                  color: '#E8E4DC',
                  fontStyle: 'italic',
                  margin: '0.25rem 0 0 0',
                  lineHeight: 1.7,
                }}>
                  « Mon Dieu, Tu vois ce qu&apos;on m&apos;a fait. Tu vois l&apos;injustice.
                  Et pourtant Tu n&apos;interviens pas. Comment veux-Tu que je pardonne
                  quand on ne m&apos;a même pas demandé pardon ? Comment veux-Tu que je
                  reste calme quand le sang bout dans mes veines ? Je suis fatigué
                  d&apos;être celui qui comprend, celui qui pardonne, celui qui se tait.
                  Aujourd&apos;hui, je veux crier. »
                </p>
              </div>
              <div>
                <p style={{
                  fontSize: '0.85rem',
                  color: '#D4AF37',
                  margin: 0,
                  fontWeight: 600,
                }}>
                  ✦ La réponse du Miroir :
                </p>
                <p style={{
                  fontSize: '0.88rem',
                  color: '#E8E4DC',
                  fontStyle: 'italic',
                  margin: '0.25rem 0 0 0',
                  lineHeight: 1.7,
                }}>
                  « Crie. Je t&apos;entends. Ta colère est juste — elle a le droit d&apos;exister.
                  Mais ne laisse pas la colère de l&apos;autre devenir ta prison.
                  Le pardon que Je te demande n&apos;est pas une absolution de l&apos;autre —
                  c&apos;est la libération de ton propre cœur. Tant que tu portes cette rage,
                  c&apos;est toi qui souffres, pas celui qui t&apos;a blessé. Le pardon n&apos;est pas
                  l&apos;oubli — c&apos;est le choix de ne plus être défini par la blessure. »
                </p>
              </div>
            </div>
          </div>

          <p style={{
            fontSize: '0.85rem',
            fontWeight: 600,
            color: '#C9A227',
            marginBottom: '0.5rem',
          }}>
            Prompts pour votre Munajat :
          </p>

          <PromptChips prompts={[
            { emoji: '🔥', text: 'Seigneur, je suis en colère et je ne veux pas pardonner' },
            { emoji: '💔', text: 'Mon Dieu, l\'injustice me consume de l\'intérieur' },
            { emoji: '🤲', text: 'Apprends-moi à lâcher sans renoncer à ma dignité' },
            { emoji: '🪞', text: 'Montre-moi ce que ma colère cache — je veux la vérité' },
            { emoji: '🕊️', text: 'Donne-moi la force de pardonner, pas la faiblesse d\'oublier' },
            { emoji: '⭐', text: 'Mon Dieu, transforme ma colère en lumière et ma blessure en sagesse' },
          ]} />

          <div style={{ marginTop: '1rem' }}>
            <label style={{
              display: 'block',
              fontSize: '0.82rem',
              fontWeight: 600,
              color: '#9B9590',
              marginBottom: '0.5rem',
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
            }}>
              Votre dialogue intime (journal de Munajat) :
            </label>
            <textarea
              placeholder="Ici, tout est permis — la rage, l'injustice, le refus de pardonner. Écrivez avec honnêteté totale..."
              style={{
                width: '100%',
                minHeight: '120px',
                padding: '1rem',
                borderRadius: '10px',
                border: '1px solid rgba(201, 162, 39, 0.15)',
                background: 'rgba(13, 17, 23, 0.6)',
                color: '#E8E4DC',
                fontSize: '0.9rem',
                lineHeight: 1.7,
                resize: 'vertical',
                fontFamily: 'inherit',
                outline: 'none',
                boxSizing: 'border-box',
              }}
            />
          </div>

          <MeditationTimer id="protD-phase3" initialSeconds={600} label="Phase 3 — Munajat Clinique" />
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
            }}>
              4
            </span>
            <div>
              <h3 style={{
                fontFamily: '"Amiri", serif',
                fontSize: '1.15rem',
                color: '#D4AF37',
                margin: 0,
              }}>
                Phase 4 : Béance Clinique
              </h3>
              <p style={{
                fontSize: '0.82rem',
                color: '#9B9590',
                margin: 0,
                fontStyle: 'italic',
              }}>
                L&apos;Exercice du Pardon Libre — 10 minutes
              </p>
            </div>
          </div>

          <p style={{
            fontSize: '0.92rem',
            lineHeight: 1.8,
            color: '#E8E4DC',
            marginBottom: '1rem',
          }}>
            Le pardon dans la tradition islamique n&apos;est jamais imposé de l&apos;extérieur.
            C&apos;est un acte de l&apos;âme qui naît naturellement quand le cœur est prêt.
            Cette phase ne demande pas au patient de pardonner — elle lui offre
            un espace pour <em>expérimenter</em> ce que le pardon pourrait sentir,
            sans engagement, sans obligation. Parfois, c&apos;est dans cet espace
            de liberté que le pardon naît de lui-même.
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
            }}>
              Exercice : « Le Pardon Libre »
            </h4>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.65rem',
              fontSize: '0.88rem',
              lineHeight: 1.75,
              color: '#E8E4DC',
            }}>
              <p style={{ margin: 0 }}>
                <strong style={{ color: '#2E8B57' }}>Étape 1 :</strong> Asseyez-vous dans votre
                espace sécurisant. Prenez 3 respirations profondes.
              </p>
              <p style={{ margin: 0 }}>
                <strong style={{ color: '#2E8B57' }}>Étape 2 :</strong> Amenez à l&apos;esprit
                la personne ou la situation qui a éveillé votre colère. Regardez-la comme
                un paysage que vous observez depuis une montagne — avec distance.
              </p>
              <p style={{ margin: 0 }}>
                <strong style={{ color: '#2E8B57' }}>Étape 3 :</strong> Demandez-vous, sans
                forcer la réponse : « Est-ce que je suis prêt à lâcher cette colère ?
                Même un tout petit peu ? Même la taille d&apos;un grain de moutarde ? »
              </p>
              <p style={{ margin: 0 }}>
                <strong style={{ color: '#2E8B57' }}>Étape 4 :</strong> Si la réponse est non —
                c&apos;est parfaitement acceptable. Dites : « Je ne suis pas prêt, et j&apos;ai
                le droit de ne pas être prêt. » Et posez cette intention dans les Mains de Dieu.
              </p>
              <p style={{ margin: 0 }}>
                <strong style={{ color: '#2E8B57' }}>Étape 5 :</strong> Si la réponse est oui —
                même un infime oui — alors respirez ce grain de pardon. Laissez-le descendre
                dans votre cœur comme une goutte d&apos;eau dans un terrain sec. Et dites :
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
                « Rabbi ghfir li warhamni — Mon Seigneur, pardonne-moi et fais-moi miséricorde.
                Tu es le Plus Miséricordieux des miséricordieux. »
              </blockquote>
              <p style={{ margin: '0.5rem 0 0 0', fontSize: '0.82rem', color: '#9B9590', fontStyle: 'italic' }}>
                💡 Note : Le pardon est un processus, pas un événement. Il peut falloir
                des semaines, des mois, parfois des années. Le fait de simplement être
                <em> ouvert </em> au pardon — même un grain de moutarde — est déjà
                une victoire du cœur.
              </p>
            </div>
          </div>

          <MeditationTimer id="protD-phase4" initialSeconds={600} label="Phase 4 — Béance Clinique" />
        </section>

        <OrnamentDivider />

        {/* Post-session exercise */}
        <section style={{ marginBottom: '2rem' }}>
          <ExerciseBox label="Exercice Post-Séance — Le Journal Relationnel">
            <p style={{ margin: '0 0 0.75rem 0' }}>
              Pendant 14 jours, tenez un journal spécifique à la transformation
              de la colère :
            </p>
            <ol style={{
              margin: 0,
              paddingLeft: '1.25rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.5rem',
            }}>
              <li>
                <strong style={{ color: '#C9A227' }}>Quand la colère monte (dans l&apos;instant) :</strong>
                Stoppez. Respirez. Notez : « Je suis en colère parce que... » et complétez
                avec la phrase la plus honnête possible. Ne jugez pas.
              </li>
              <li>
                <strong style={{ color: '#C9A227' }}>Le soir (5 min) :</strong> Revenez sur
                les moments de colère de la journée. Posez la question du miroir :
                « Qu&apos;est-ce que cette colère me révèle sur moi ? » Notez les insights.
              </li>
              <li>
                <strong style={{ color: '#C9A227' }}>Munajat hebdomadaire :</strong> Une fois
                par semaine, écrivez une lettre de colère honnête à Dieu — tout dire,
                tout crier sur le papier. Puis relisez-la et demandez : « Est-ce que je
                suis prêt à lâcher un grain de cette colère ? »
              </li>
            </ol>
            <p style={{ margin: '0.75rem 0 0 0', fontSize: '0.85rem', color: '#9B9590', fontStyle: 'italic' }}>
              💡 Conseil au praticien : Le changement ne se mesure pas à l&apos;absence
              de colère, mais à la <em>capacité de la contenir, de la nommer et de la
              transformer</em>. Chaque fois que le patient choisit de respirer au lieu
              d&apos;exploser, c&apos;est une victoire. Célébrez-la.
            </p>
          </ExerciseBox>
        </section>
      </ProtocolBody>
    </div>
  );
}
