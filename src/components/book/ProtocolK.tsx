'use client';

import React from 'react';
import ProtocolHeader from './ProtocolHeader';
import ProtocolBody from './ProtocolBody';
import QuoteBlock from './QuoteBlock';
import ArabicVerse from './ArabicVerse';
import BookTable from './BookTable';
import MeditationTimer from './MeditationTimer';
import MirrorQuestion from './MirrorQuestion';
import ExerciseBox from './ExerciseBox';
import OrnamentDivider from './OrnamentDivider';
import MunajatTextarea from './MunajatTextarea';

export default function ProtocolK() {
  return (
    <div>
      <ProtocolHeader
        number="K"
        title="Protocole K : Culpabilité Toxique"
        subtitle="Délier le Cœur des Chaînes du Passé — Quand la Culpabilité Devient un Miroir de la Miséricorde Divine"
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
              'Culpabilité post-traumatique — sentiment de responsabilité écrasant après un événement traumatique',
              'Honte identitaire chronique — sentiment d\'être fondamentalement mauvais ou indigne',
              'Syndrome de l\'imposteur — croyance persistante que ses réussites sont imméritées',
              'Culpabilité religieuse excessive — peur constante d\'avoir offensé Dieu, scrupulosité pathologique',
              'Remords persistants — ruminations impossibles autour d\'actes passés non pardonnés',
              'Auto-punition inconsciente — comportements d\'autosabotage motivés par le besoin de « mériter » la souffrance',
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

        {/* Objective */}
        <section style={{ marginBottom: '2rem' }}>
          <QuoteBlock cite="Objectif clinique du Protocole K">
            La culpabilité saine est un <em>signal</em> — elle nous alerte
            quand nous avons transgressé nos valeurs et nous pousse à réparer.
            Mais la culpabilité toxique est une <em>prison</em> — elle ne corrige
            rien, elle ne répare rien, elle ne fait qu&apos;écraser l&apos;âme sous
            le poids d&apos;un passé qui ne passe pas. Ce protocole vise à
            distinguer ces deux formes et à libérer le patient des chaînes
            du remours en le reconnectant à la Miséricorde divine — la seule
            force capable de transformer la culpabilité en sagesse.
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
              ['Évaluation de la culpabilité', '1 sem.', '1', 'Hebdomadaire'],
              ['Fana Clinique', '5 min/séance', '2', 'Hebdomadaire'],
              ['Tajalli Clinique', '10 min/séance', '2–3', 'Hebdomadaire'],
              ['Munajat Clinique', '10 min/séance', '2–4', 'Hebdomadaire'],
              ['Béance Clinique', '8 min/séance', '2–3', 'Hebdomadaire'],
              ['Intégration', 'Variable', '1', 'Bimensuelle'],
              ['Total estimé', '', '8–14', ''],
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
            arabic="قُلۡ يَٰعِبَادِيَ ٱلَّذِينَ أَسۡرَفُواْ عَلَىٰٓ أَنفُسِهِمۡ لَا تَقۡنَطُواْ مِن رَّحۡمَةِ ٱللَّهِ"
            translation="Dis : Ô Mes serviteurs qui avez commis des excès contre vous-mêmes, ne désespérez pas de la miséricorde de Dieu."
            reference="Az-Zumar 39:53"
          />

          <ArabicVerse
            arabic="إِن تَجۡتَنِبُواْ كَبَٰٓئِرَ مَا تُنۡهَوۡنَ عَنۡهُ نُكَفِّرُ عَنكُمۡ سَيِّـَٔاتِكُمۡ"
            translation="Si vous évitez les grands péchés qui vous sont interdits, Nous effacerons vos méfaits et Nous vous ferons entrer par une porte honorable."
            reference="An-Nisa 4:31"
          />

          <ArabicVerse
            arabic="وَٱلَّذِينَ إِذَا فَعَلُواْ فَٰحِشَةً أَوۡ ظَلَمُوٓاْ أَنفُسَهُمۡ ذَكَرُواْ ٱللَّهَ فَٱسۡتَغۡفَرُواْ لِذُنُوبِهِمۡ"
            translation="Et ceux qui, lorsqu'ils ont commis une turpitude ou se sont opprimés eux-mêmes, se rappellent de Dieu et demandent pardon pour leurs péchés — et qui pardonne les péchés sinon Dieu ?"
            reference="Al-Imran 3:135-136"
          />

          <ArabicVerse
            arabic="إِنَّ ٱلۡحَسَنَٰتِ يُذۡهِبۡنَ ٱلسَّيِّـَٔاتِ"
            translation="Les bonnes actions effacent les mauvaises."
            reference="Hud 11:114"
          />
        </section>

        <OrnamentDivider />

        {/* Guilt types table */}
        <section style={{ marginBottom: '2rem' }}>
          <h3 style={{
            fontFamily: '"Amiri", serif',
            fontSize: '1.15rem',
            color: '#D4AF37',
            marginBottom: '0.75rem',
          }}>
            🌿 Types de Culpabilité et Leurs Miroirs
          </h3>
          <BookTable
            headers={['Type de Culpabilité', 'Miroir Spirituel', 'Pratique de Libération', 'Verset Référent']}
            rows={[
              [
                'Post-traumatique',
                'Maghfira (Pardon divin)',
                'Rituel d\'Istighfar progressif — demander pardon non pas comme une punition mais comme une libération',
                'Az-Zumar 39:53',
              ],
              [
                'Identitaire',
                'Tawhid (Unité divine)',
                'Contemplation de l\'origine divine de l\'âme — se reconnecter à sa nature pure (Fitrah)',
                'An-Nisa 4:31',
              ],
              [
                'Religieuse',
                'Rahma (Miséricorde)',
                'Méditation sur les Noms divins de la Miséricorde (Ar-Rahman, Ar-Rahim, Al-Ghafur)',
                'Al-Imran 3:135-136',
              ],
              [
                'Chronique',
                'Tawba (Repentir)',
                'Pratique du renouvellement quotidien de l\'intention — chaque jour est une page blanche',
                'Hud 11:114',
              ],
              [
                'Auto-punitive',
                'Husn al-Zann (Bonnes pensées envers Dieu)',
                'Apprendre à croire que Dieu veut notre guérison, pas notre punition',
                'Az-Zumar 39:53',
              ],
            ]}
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
              }}>Le Poids Reconnu — 5 minutes</p>
            </div>
          </div>

          <p style={{
            fontSize: '0.92rem',
            lineHeight: 1.8,
            color: '#E8E4DC',
            marginBottom: '1rem',
          }}>
            Le patient écrasé par la culpabilité porte un <em>poids invisible</em> —
            un sac rempli de pierres qui porte les noms de chaque erreur, chaque
            regret, chaque « j&apos;aurais dû ». Ce poids est devenu si familier qu&apos;il
            ne sait plus marcher sans lui. Cette phase est un acte de
            <em> reconnaissance</em> : nommer le poids sans en être écrasé — le
            voir pour la première fois comme un fardeau, pas comme une identité.
          </p>

          <ArabicVerse
            arabic="قُلۡ يَٰعِبَادِيَ ٱلَّذِينَ أَسۡرَفُواْ عَلَىٰٓ أَنفُسِهِمۡ لَا تَقۡنَطُواْ مِن رَّحۡمَةِ ٱللَّهِ إِنَّ ٱللَّهَ يَغۡفِرُ ٱلذُّنُوبَ جَمِيعًا"
            translation="Dis : Ô Mes serviteurs qui avez commis des excès contre vous-mêmes, ne désespérez pas de la miséricorde de Dieu. Certes, Dieu pardonne tous les péchés."
            reference="Az-Zumar 39:53"
          />

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
            }}>Technique : « La Pose du Fardeau »</h4>
            <ol style={{
              margin: 0,
              paddingLeft: '1.5rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.65rem',
            }}>
              {[
                'Asseyez-vous confortablement. Fermez les yeux. Prenez 3 respirations profondes — inspirez (4 sec), retenez (2 sec), expirez (6 sec).',
                'Sentez le poids que vous portez — dans les épaules, la nuque, la poitrine. Ce poids physique est le reflet de votre culpabilité. Ne cherchez pas à le repousser. Contentez-vous de le sentir.',
                'Maintenant, imaginez que ce poids prend forme : c\'est un sac rempli de pierres. Chaque pierre porte un mot — « trahison », « abandon », « erreur », « faute ». Regardez ce sac avec compassion.',
                'Dieu dit : « Ne désespérez pas de Ma miséricorde. » Répétez cette phrase lentement, comme un baume posé sur chaque pierre. Ressentez le sac s\'alléger un peu.',
                'Imaginez que vous posez ce sac au sol, devant vous. Vous pouvez le reprendre plus tard si vous le souhaitez. Mais pour cet instant, vous êtes libre. Respirez dans cette légèreté.',
                'Prenez une inspiration profonde et ouvrez doucement les yeux — le sac est toujours là, mais vous n\'êtes plus obligé(e) de le porter en permanence.',
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

          <MeditationTimer id="protK-phase1" initialSeconds={300} label="Phase 1 — Fana Clinique" />
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
              }}>La Miséricorde Révélée — 10 minutes</p>
            </div>
          </div>

          <p style={{
            fontSize: '0.92rem',
            lineHeight: 1.8,
            color: '#E8E4DC',
            marginBottom: '1rem',
          }}>
            Le Coran enseigne : « Si vous évitez les grands péchés, Nous
            effacerons vos méfaits. » (An-Nisa 4:31) — et encore : « Les
            bonnes actions effacent les mauvaises. » (Hud 11:114). La Miséricorde
            divine n&apos;est pas une théologie abstraite — c&apos;est une <em>dynamique
            vivante</em> : à chaque acte de bien, un péché est effacé. Le patient
            coupable a oublié que le pardon n&apos;est pas seulement une promesse
            pour l&apos;au-delà, mais une réalité présente, à chaque instant.
          </p>

          <ArabicVerse
            arabic="إِن تَجۡتَنِبُواْ كَبَٰٓئِرَ مَا تُنۡهَوۡنَ عَنۡهُ نُكَفِّرُ عَنكُمۡ سَيِّـَٔاتِكُمۡ وَنُدۡخِلۡكُم مُّدۡخَلٗا كَرِيمٗا"
            translation="Si vous évitez les grands péchés qui vous sont interdits, Nous effacerons vos méfaits et Nous vous ferons entrer par une porte honorable."
            reference="An-Nisa 4:31"
          />

          <MirrorQuestion question="Si la Miséricorde divine est plus vaste que ma culpabilité — et si chaque bonne pensée, chaque sourire, chaque acte de bonté efface une faute — combien de mes péchés ont déjà été pardonnés sans que je le sache ?" />

          <div style={{
            padding: '1rem 1.25rem',
            borderRadius: '8px',
            background: 'rgba(0, 212, 255, 0.04)',
            border: '1px solid rgba(0, 212, 255, 0.1)',
            margin: '1rem 0',
          }}>
            <p style={{
              fontSize: '0.82rem',
              fontWeight: 700,
              color: '#00D4FF',
              marginBottom: '0.5rem',
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
            }}>
              Exemples de réponses possibles
            </p>
            <ul style={{
              margin: 0,
              paddingLeft: '1.25rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.35rem',
            }}>
              {[
                '« Chaque fois que j\'ai aidé quelqu\'un sans rien attendre en retour, une de mes fautes s\'est effacée — et je l\'ai fait des centaines de fois sans le savoir. »',
                '« Mon cœur est déjà plus pardonnable que je ne le crois — car je pardonne aux autres plus facilement qu\'à moi-même. »',
                '« Si Dieu pardonne les péchés « tous ensemble », pourquoi est-ce que je les porte un par un ? »',
                '« La culpabilité est un visiteur, pas un résident — il est temps de lui montrer la sortie. »',
              ].map((ex, i) => (
                <li key={i} style={{
                  fontSize: '0.85rem',
                  lineHeight: 1.65,
                  color: '#E8E4DC',
                  fontStyle: 'italic',
                }}>
                  {ex}
                </li>
              ))}
            </ul>
          </div>

          <MeditationTimer id="protK-phase2" initialSeconds={600} label="Phase 2 — Tajalli Clinique" />
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
              }}>Le Cri du Repentir — 10 minutes</p>
            </div>
          </div>

          <p style={{
            fontSize: '0.92rem',
            lineHeight: 1.8,
            color: '#E8E4DC',
            marginBottom: '1rem',
          }}>
            Le Coran décrit les croyants comme ceux « qui, lorsqu&apos;ils commettent
            une faute ou se font du tort à eux-mêmes, se rappellent de Dieu
            et demandent pardon. » (Al-Imran 3:135-136). La Munajat pour la
            culpabilité toxique est un espace de <em>réparation intime</em> — un
            lieu où le patient peut nommer ses fautes sans être jugé, les
            offrir à Celui qui pardonne et les voir transformées en sagesse.
            Ici, la culpabilité cède la place à la paix.
          </p>

          <ArabicVerse
            arabic="وَٱلَّذِينَ إِذَا فَعَلُواْ فَٰحِشَةً أَوۡ ظَلَمُوٓاْ أَنفُسَهُمۡ ذَكَرُواْ ٱللَّهَ فَٱسۡتَغۡفَرُواْ لِذُنُوبِهِمۡ وَمَن يَغۡفِرُ ٱلذُّنُوبَ إِلَّا ٱللَّهُ"
            translation="Et ceux qui, lorsqu'ils ont commis une turpitude ou se sont opprimés eux-mêmes, se rappellent de Dieu et demandent pardon pour leurs péchés — et qui pardonne les péchés sinon Dieu ?"
            reference="Al-Imran 3:135-136"
          />

          <MunajatTextarea
            protocolName="Protocol K"
            phaseName="Munajat Clinique"
            id="prot-k-phase3"
            placeholder="Ici, votre culpabilité se transforme en prière — offrez vos fautes à Celui qui les transforme en miséricorde..."
            prompts={[
              { emoji: '🙏', text: 'Ô Toi qui pardonne tous les péchés — pardonne-moi aussi, surtout de ne pas me pardonner...' },
              { emoji: '💎', text: 'Seigneur, ma culpabilité est devenue une prison — ouvre-moi la porte de Ta Miséricorde' },
              { emoji: '💫', text: 'Mon Dieu, si Tu pardonnes ceux qui se sont opprimés eux-mêmes, alors je suis aussi de ceux-là' },
              { emoji: '🕊️', text: 'Ô Ar-Rahman, plus de mes fautes sont déjà pardonnées que je ne l\'imagine — aide-moi à le croire' },
              { emoji: '🤲', text: 'Seigneur, je dépose ce fardeau entre Tes Mains — il est trop lourd pour moi mais il ne l\'est pas pour Toi' },
              { emoji: '🌅', text: 'Apprends-moi, Ô Ghafur, à distinguer la culpabilité qui corrige de celle qui détruit' },
            ]}
          />

          <MeditationTimer id="protK-phase3" initialSeconds={600} label="Phase 3 — Munajat Clinique" />
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
              }}>La Page Blanche — 8 minutes</p>
            </div>
          </div>

          <p style={{
            fontSize: '0.92rem',
            lineHeight: 1.8,
            color: '#E8E4DC',
            marginBottom: '1rem',
          }}>
            « Les bonnes actions effacent les mauvaises. » (Hud 11:114) —
            cette promesse divine est la porte de sortie de la culpabilité toxique.
            Le passé ne peut être changé, mais il peut être <em>transmuté</em>.
            Chaque acte de bonté, chaque prière sincère, chaque pas vers
            la guérison est un pinceau qui recouvre les taches sombres
            de la toile de l&apos;âme. Cette phase est un acte de
            <em> renouvellement</em> : le patient ferme le livre du passé
            et ouvre une page blanche.
          </p>

          <ArabicVerse
            arabic="إِنَّ ٱلۡحَسَنَٰتِ يُذۡهِبۡنَ ٱلسَّيِّـَٔاتِ"
            translation="Les bonnes actions effacent les mauvaises. C'est là un rappel pour ceux qui se souviennent."
            reference="Hud 11:114"
          />

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
            }}>Exercice : « La Cérémonie de la Page Blanche »</h4>
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
                de papier. Écrivez dessus les fautes ou regrets que vous portez — pas
                pour les ruminer, mais pour les <em>nommer</em>. Soyez honnête mais pas
                cruel(le) envers vous-même. Écrivez jusqu&apos;à ce que vous sentiez
                que la liste est complète.
              </p>
              <p style={{ margin: 0 }}>
                <strong style={{ color: '#2E8B57' }}>Étape 2 :</strong> Maintenant, prenez
                cette feuille et dites à voix haute : « Ô Dieu, ces fautes sont les miennes,
                mais Ton pardon est aussi pour moi. Je ne suis pas ce que j&apos;ai fait.
                Je suis celui/celle qui revient. »
              </p>
              <p style={{ margin: 0 }}>
                <strong style={{ color: '#2E8B57' }}>Étape 3 :</strong> Déchirez la feuille
                en petits morceaux. Chaque morceau qui tombe est une faute remise entre
                les Mains divines. Ne les ramassez pas. Laissez-les partir — comme Dieu
                vous laisse repartir chaque matin avec une nouvelle chance.
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
                « Chaque nuit, quand le soleil se couche, Dieu dit : « Qui Me demande pardon
                pour que Je lui pardonne ? » Et le matin, Il dit : « Qui se repent pour
                que Je lui pardonne ? » — Alors pourquoi refuses-tu ce que Dieu t&apos;offre
                chaque aube ? »
              </blockquote>
            </div>
          </div>

          <MeditationTimer id="protK-phase4" initialSeconds={480} label="Phase 4 — Béance Clinique" />
        </section>

        <OrnamentDivider />

        {/* Quote Block */}
        <section style={{ marginBottom: '2rem' }}>
          <QuoteBlock cite="Ibn Arabî — Al-Futūḥāt al-Makkiyya">
            La miséricorde de Dieu n&apos;est pas un refuge pour les parfaits —
            elle est un berceau pour les brisés. Celui qui porte la culpabilité
            comme un fardeau ne sait pas que ce fardeau est lui-même une miséricorde :
            car sans la culpabilité, il n&apos;y aurait pas de retour, et sans
            le retour, il n&apos;y aurait pas de rencontre. La faute est la porte.
            Le repentir est la clé. Et la miséricorde est la maison.
          </QuoteBlock>
        </section>

        <OrnamentDivider />

        {/* Post-session exercise */}
        <section style={{ marginBottom: '2rem' }}>
          <ExerciseBox label="Exercice Post-Séance — Le Journal des Pardons">
            <p style={{ margin: '0 0 0.75rem 0' }}>
              Ce programme de 40 jours accompagne la libération progressive
              de la culpabilité toxique. Chaque semaine développe une dimension
              différente du pardon :
            </p>
            <ol style={{
              margin: 0,
              paddingLeft: '1.25rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.5rem',
            }}>
              <li>
                <strong style={{ color: '#C9A227' }}>Semaine 1–2 — Le Pardon de Soi (5 min/jour) :</strong>
                Chaque soir, écrivez dans votre journal : « Aujourd&apos;hui, je me
                pardonne pour... » — nommez une chose, même minime. L&apos;objectif n&apos;est
                pas de minimiser les fautes, mais de réapprendre que le pardon est
                possible — commencer par soi-même.
              </li>
              <li>
                <strong style={{ color: '#C9A227' }}>Semaine 3–4 — Le Pardon de Dieu (10 min/jour) :</strong>
                Chaque matin, récitez « Astaghfirullah » 33 fois en méditant sur
                sa signification : « Je demande à Dieu de me couvrir, de me protéger
                de mes propres fautes. » Le soir, notez dans votre journal : « Aujourd&apos;hui,
                j&apos;ai reçu un signe de la Miséricorde divine en... »
              </li>
              <li>
                <strong style={{ color: '#C9A227' }}>Semaine 5–6 — Les Bonnes Actions Effacent (10 min/jour) :</strong>
                Chaque jour, posez un acte de bonté intentionnel (aider quelqu&apos;un,
                faire un compliment sincère, donner en charité, rendre visite à un malade).
                Après chaque acte, dites intérieurement : « Cette bonne action efface
                une de mes mauvaises. » Visualisez la balance pencher vers la lumière.
              </li>
              <li>
                <strong style={{ color: '#C9A227' }}>Semaine 7–40 — Le Journal du Renouvellement :</strong>
                Chaque dimanche, relisez les entrées de la semaine. Puis prenez une
                nouvelle page et écrivez : « Je ferme cette page. J&apos;ouvre une
                page blanche. Mon passé est enseignement, pas prison. » — Ce rituel
                hebdomadaire de renouvellement installe progressivement la capacité
                à lâcher prise sur la culpabilité chronique.
              </li>
            </ol>
            <p style={{ margin: '0.75rem 0 0 0', fontSize: '0.85rem', color: '#9B9590', fontStyle: 'italic' }}>
              💡 Note au praticien : La culpabilité religieuse excessive (scrupulosité)
              nécessite une distinction claire entre la culpabilité saine (signal moral)
              et la culpabilité toxique (auto-punition). Dans certains cas, la culpabilité
              religieuse peut masquer un TOC (trouble obsessionnel compulsif) de nature
              religieuse — une évaluation spécialisée est recommandée. Ce protocole
              est un complément spirituel et ne remplace pas un suivi psychiatrique adapté.
            </p>
          </ExerciseBox>
        </section>
      </ProtocolBody>
    </div>
  );
}
